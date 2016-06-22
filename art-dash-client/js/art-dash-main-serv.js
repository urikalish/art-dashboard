angular.module('artDashApp').factory('artDashServ', function artDashServ(artDashConstants, artDashVariables, artDashCommServ) {

  function getDataFromServer(requestData, callback) {
    artDashCommServ.sendServerRequest(requestData, callback);
  }

  return {
    getDataFromServer: getDataFromServer
  }

});

