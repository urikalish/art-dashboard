angular.module('artDashApp').controller('artDashCtrl', function artDashCtrl($scope, $timeout, artDashConstants, artDashServ) {

  function getData() {
    artDashServ.getDataFromServer($scope.model.imageIndex, handleServerResponse);
  }

  function scheduleGetData() {
    $timeout(function() {
      getData();
    }, 10000);
  }

  function handleServerResponse(responseData) {
    var i = $scope.model.imageIndex % 2;
    $scope.model.imageSrc[i] = artDashConstants.url.artBase + '/' + responseData.imagePath;
    $scope.model.imageVisibility[i] = true;
    $scope.model.imageVisibility[i*-1 + 1] = false;
    $scope.model.dataInfo = responseData.dataString;
    $scope.model.artInfo = responseData.artworkName + ' - ' + responseData.artistName + ', ' + responseData.artworkYear;
    $scope.model.imageIndex++;
    scheduleGetData();
  }

  $scope.model = {
    imageIndex: 0,
    dataInfo: '',
    artInfo: '',
    imageSrc: ['', ''],
    imageVisibility: [false, false]
  };

  getData();

});


