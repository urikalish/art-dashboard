angular.module('artDashApp').factory('artDashCommServ', function artDashCommServ($http, artDashConstants) {

  function sendServerRequest(clientCounter, callback) {
    var req = {
      method: 'POST',
      url: artDashConstants.url.API_BASE,
      headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
      data: $.param({clientCounter: clientCounter})
    };
    $http(req).then(function(response) {
      callback(response.data);
    });
  }

  return {
    sendServerRequest: sendServerRequest
  }
  
});
