angular.module('artDashApp').factory('artDashServ', function artDashServ(artDashConstants, artDashVariables, artDashCommServ) {

  function getDataFromServer(clientCounter, callback) {
    artDashCommServ.sendServerRequest(clientCounter, callback);
  }

  return {
    getDataFromServer: getDataFromServer
  }

});

