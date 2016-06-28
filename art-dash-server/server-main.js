var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var artDashConfig = require('./server-config.js').artDashConfig;
var artDashItems = require('./items.js').items;
var artDashDataProvider = require('./data-provider.js').artDashDataProvider;
var artDashArtProvider = require('./art-provider.js').artDashArtProvider;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
var httpServer = http.Server(app);

function afterGetData(context, data) {
	console.log('afterGetData()');
	console.log('Data: ' + JSON.stringify(data));
	var art = artDashArtProvider.getArt(context, data);
  var response = {
		general: {
			clientCounter: context.clientCounter,
			serverIndex: context.item.serverIndex,
			description: context.item.description
		},
		data: {
			value: context.item.data.hideValue ? null : data.value,
			percentage: context.item.data.hidePercentage ? null : data.percentage
		},
		art: {
			artistName: art.artistName,
			artworkName: art.artworkName,
			artworkInfo: art.artworkInfo,
			artworkYear: art.artworkYear,
			imagePath: art.imagePath
		}
	};
	var responseDataJson = JSON.stringify(response, null, 4);
	console.log('Response: ' + responseDataJson);
	console.log('--------------------------------------------------------------------------------');
	context.res.end(responseDataJson);
}

for (var i = 0; i < artDashItems.length; i++) {
	artDashItems[i].index = i;
}

//HTTP GET
app.use('/' + artDashConfig.STATIC_DIR, express.static(__dirname + '/../art-dash-client'));

//HTTP POST
app.post('/api', function(req, res) {
	var clientCounter, serverIndex, item, context;
	console.log('--------------------------------------------------------------------------------');
	console.log('Server API call');
	clientCounter = parseInt(req.body.clientCounter, 10);
	console.log('clientCounter: ' + clientCounter);
	serverIndex = clientCounter % artDashItems.length;
	console.log('serverIndex: ' + serverIndex);
  item = artDashItems[serverIndex];
	console.log('Item: ' + JSON.stringify(item));
	context = {
		clientCounter: clientCounter,
		item: item,
		res: res
	};
	artDashDataProvider.getData(context, afterGetData);
});

//LISTEN
httpServer.listen(artDashConfig.SERVER_PORT, function(){
	console.log('UI available at http://localhost:' + artDashConfig.SERVER_PORT.toString() + '/' + artDashConfig.STATIC_DIR + '/');
	console.log('Server READY');
});
