angular.module('artDashApp').factory('artDashCommServ', function artDashCommServ($http, artDashConstants) {

  function sendServerRequest(imageIndex, callback) {
    var req = {
      method: 'POST',
      url: artDashConstants.url.apiBase,
      headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
      data: $.param({imageIndex: imageIndex})
    };
    $http(req).then(function(response) {
      callback(response.data);
    });
  }

  return {
    sendServerRequest: sendServerRequest
  }
  
});
