angular.module('artDashApp').controller('artDashCtrl', function artDashCtrl($scope, $timeout, artDashConstants, artDashServ) {

  function getData() {
    artDashServ.getDataFromServer($scope.model.counter, handleServerResponse);
  }

  function scheduleGetData() {
    $timeout(function() {
      getData();
    }, 10000);
  }

  function handleServerResponse(responseData) {
    $scope.model.showArt = false;
    $timeout(function() {
      $scope.model.imageSrc = artDashConstants.url.artBase + '/' + responseData.art.imagePath;
      $scope.model.artInfo = responseData.art.artistName + ' - "' + responseData.art.artworkName + '", ' + responseData.art.artworkYear;
      $scope.model.showArt = true;
      $scope.model.counter++;
      scheduleGetData();
    }, 1500);
  }

  $scope.model = {
    showArt: false,
    counter: 0,
    artInfo: '',
    imageSrc: ''
  };

  getData();

});


