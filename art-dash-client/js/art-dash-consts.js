angular.module('artDashApp').factory('artDashConstants', function artDashConstants() {

  var protocol = 'http';
  var server = 'localhost';
  var port = 1618;
  var staticDir = 'art-dash';
  var artBase = protocol + '://' + server + ':' + port + '/' + staticDir + '/art';
  var apiBase = protocol + '://' + server + ':' + port + '/api';

  return {
    displayDuration: {
      SHORT:              2500,
      NORMAL:             5000,
      LONG:               10000
    },
    url: {
      ART_BASE:           artBase,
      API_BASE:           apiBase
    },
    ctrlId: {
      IMAGE:              'art-dash-image'
    }
  }
  
});
