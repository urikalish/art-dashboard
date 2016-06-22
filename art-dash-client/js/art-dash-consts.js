angular.module('artDashApp').factory('artDashConstants', function artDashConstants() {

  var protocol = 'http';
  var server = 'localhost';
  var port = 1618;
  var staticDir = 'art-dash';
  var artBase = protocol + '://' + server + ':' + port + '/' + staticDir + '/art';
  var apiBase = protocol + '://' + server + ':' + port + '/api';

  return {
    url: {
      artBase:            artBase,
      apiBase:            apiBase
    },
    ctrlId: {
      IMAGE:              'art-dash-image'
    }
  }
  
});
