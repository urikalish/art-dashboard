var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var artDashConfig = require('./server-config.js').artDashConfig;
var artDashItems = require('./items.js').items;
var artDashDataProvider = require('./data-providers/data-provider.js').artDashDataProvider;
var artDashArtProvider = require('./art-providers/art-provider.js').artDashArtProvider;

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
var httpServer = http.Server(app);

//HTTP GET
app.use('/' + artDashConfig.STATIC_DIR, express.static(__dirname + '/../art-dash-client'));

//HTTP POST
app.post('/api', function(req, res) {
	var index, item, data, response, responseDataJson;
	console.log('--------------------------------------------------------------------------------');
	index = req.body.index;
	console.log('Server API call. index: ' + index);
  item = artDashItems[index % artDashItems.length];
	response = {
		desc: item.desc
	};
	artDashDataProvider.getData(item, response);
	artDashArtProvider.getArt(item, response);
	responseDataJson = JSON.stringify(response);
	console.log('--------------------------------------------------------------------------------');
	res.end(responseDataJson);
});

//LISTEN
httpServer.listen(artDashConfig.SERVER_PORT, function(){
	console.log('UI available at http://localhost:' + artDashConfig.SERVER_PORT.toString() + '/' + artDashConfig.STATIC_DIR + '/');
	console.log('Server READY');
});
