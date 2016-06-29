angular.module('artDashApp').factory('artDashConstants', function artDashConstants() {

  var protocol = 'http';
  var server = 'localhost';
  //var server = 'kalish2.emea.hpqcorp.net';
  var port = 1618;
  var staticDir = 'art-dash';
  var artBase = protocol + '://' + server + ':' + port + '/' + staticDir + '/art';
  var apiBase = protocol + '://' + server + ':' + port + '/api';

  return {
    displayDuration: {
      SHORT:              300,
      NORMAL:             6000,
      LONG:               9000
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
