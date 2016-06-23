angular.module('artDashApp').factory('artDashCommServ', function artDashCommServ($http, artDashConstants) {

  function sendServerRequest(index, callback) {
    var req = {
      method: 'POST',
      url: artDashConstants.url.apiBase,
      headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
      data: $.param({index: index})
    };
    $http(req).then(function(response) {
      callback(response.data);
    });
  }

  return {
    sendServerRequest: sendServerRequest
  }
  
});
