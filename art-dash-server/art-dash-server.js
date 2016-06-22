var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var artDashConfig = require('./art-dash-config.js').artDashConfig;
var artDashDataProvider = require('./art-dash-data-provider.js').artDashDataProvider;

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
var httpServer = http.Server(app);

//HTTP GET
app.use('/' + artDashConfig.STATIC_DIR, express.static(__dirname + '/../art-dash-client'));

//HTTP POST
app.post('/api', function(req, res) {
	console.log('--------------------------------------------------------------------------------');
	var imageIndex = req.body.imageIndex;
	console.log('Server API call. imageIndex: ' + imageIndex);
  var responseDataJson = artDashDataProvider.getData(imageIndex);
	console.log('--------------------------------------------------------------------------------');
	res.end(responseDataJson);
});

//LISTEN
httpServer.listen(artDashConfig.SERVER_PORT, function(){
	console.log('UI available at http://localhost:' + artDashConfig.SERVER_PORT.toString() + '/' + artDashConfig.STATIC_DIR + '/');
	console.log('Server READY');
});
