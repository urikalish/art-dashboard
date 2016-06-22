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
    $scope.model.artworkInfo = '"' + responseData.artworkName + '" - ' + responseData.artistName + ', ' + responseData.artworkYear;
    var imgCtrl = $('#' + artDashConstants.ctrlId.IMAGE)[0];
    imgCtrl.src = artDashConstants.url.artBase + '/' + responseData.imagePath;
    $scope.model.imageIndex++;
    scheduleGetData();
  }

  $scope.model = {
    imageIndex: 0,
    artworkInfo: ''
  };

  getData();

});


