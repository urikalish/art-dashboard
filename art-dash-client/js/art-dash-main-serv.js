angular.module('artDashApp').factory('artDashServ', function artDashServ(artDashConstants, artDashVariables, artDashCommServ) {

  function getDataFromServer(index, callback) {
    artDashCommServ.sendServerRequest(index, callback);
  }

  return {
    getDataFromServer: getDataFromServer
  }

});

