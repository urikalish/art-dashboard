angular.module('artDashApp').controller('artDashCtrl', function artDashCtrl($scope, $timeout, artDashConstants, artDashServ) {

  function getData() {
    artDashServ.getDataFromServer($scope.model.index, handleServerResponse);
  }

  function scheduleGetData() {
    $timeout(function() {
      getData();
    }, 10000);
  }

  function handleServerResponse(responseData) {
    $scope.model.showArt = false;
    $timeout(function() {
      var i = $scope.model.index % 2;
      $scope.model.imageSrc[i] = artDashConstants.url.artBase + '/' + responseData.imagePath;
      $scope.model.imageIsVisibile[i] = true;
      $scope.model.imageIsVisibile[i*-1 + 1] = false;
      var dataInfos = responseData.dataString.split(' ');
      $scope.model.dataInfo1 = dataInfos[0];
      $scope.model.dataInfo2 = responseData.dataString.substring(dataInfos[0].length);
      $scope.model.artInfo = responseData.artistName + ' - ' + responseData.artworkName + ' - ' + responseData.artworkYear;
      $scope.model.showArt = true;
      $scope.model.index++;
      scheduleGetData();
    }, 1500);
  }

  $scope.model = {
    showArt: false,
    index: 0,
    dataInfo1: '',
    dataInfo2: '',
    artInfo: '',
    imageSrc: ['', ''],
    imageIsVisibile: [false, false]
  };

  getData();

});


