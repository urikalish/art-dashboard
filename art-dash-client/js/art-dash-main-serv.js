angular.module('artDashApp').factory('artDashServ', function artDashServ(artDashConstants, artDashVariables, artDashCommServ) {

  function getDataFromServer(counter, callback) {
    artDashCommServ.sendServerRequest(counter, callback);
  }

  return {
    getDataFromServer: getDataFromServer
  }

});

