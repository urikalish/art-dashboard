angular.module('artDashApp').controller('artDashCtrl', function artDashCtrl($scope, $timeout, artDashConstants, artDashServ) {

  function getData() {
    artDashServ.getDataFromServer($scope.model.clientCounter, handleServerResponse);
  }

  function scheduleGetData() {
    $timeout(function() {
      getData();
    }, 3000);
  }

  function handleServerResponse(responseData) {
    $scope.model.showArt = false;
    $timeout(function() {
      $scope.model.imageSrc = artDashConstants.url.artBase + '/' + responseData.art.imagePath;
      $scope.model.artInfo = responseData.art.artistName + ' - "' + responseData.art.artworkName + '", ' + responseData.art.artworkYear;
      $scope.model.dataInfo = responseData.general.description;
      if (responseData.data.value && responseData.data.percentage) {
        $scope.model.dataInfo += ': ' + responseData.data.value + ' (' + responseData.data.percentage + '%)';
      } else if (responseData.data.value) {
        $scope.model.dataInfo += ': ' + responseData.data.value;
      } else if (responseData.data.percentage) {
        $scope.model.dataInfo += ': ' + responseData.data.percentage + '%';
      }
      $scope.model.showArt = true;
      $scope.model.clientCounter++;
      scheduleGetData();
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


