angular.module('artDashApp').controller('artDashCtrl', function artDashCtrl($scope, $timeout, artDashConstants, artDashServ) {

  function getData() {
    artDashServ.getDataFromServer($scope.model.clientCounter, handleServerResponse);
  }

  function scheduleGetData(delay) {
    $timeout(function() {
      getData();
    }, delay);
  }

  function handleServerResponse(responseData) {
    $scope.model.showArt = false;
    $timeout(function() {
      $scope.model.imageSrc = artDashConstants.url.artBase + '/' + responseData.art.imagePath;
      $scope.model.artInfo = responseData.art.artistName + ' - "' + responseData.art.artworkName + '", ' + responseData.art.artworkYear;
      $scope.model.dataInfo = responseData.general.description;
      var hasValue = responseData.data.value || responseData.data.value === 0;
      var hasPercentage = responseData.data.percentage || responseData.data.percentage === 0;
      if (hasValue && hasPercentage) {
        $scope.model.dataInfo += ': ' + responseData.data.value + ' (' + responseData.data.percentage + '%)';
      } else if (hasValue) {
        $scope.model.dataInfo += ': ' + responseData.data.value;
      } else if (hasPercentage) {
        $scope.model.dataInfo += ': ' + responseData.data.percentage + '%';
      }
      $scope.model.showArt = true;
      $scope.model.clientCounter++;
      scheduleGetData(responseData.general.shortDisplay ? 2000 : 4000);
    }, 1000);
  }

  $scope.model = {
    showArt: false,
    clientCounter: 0,
    artInfo: '',
    dataInfo: '',
    imageSrc: ''
  };

  getData();

});


