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
	var art = artDashArtProvider.getArt(context, data);
  var response = {
		general: {
			index: context.item.index,
			desc: context.item.desc
		},
		data: {
			value: data.value,
			percentage: data.percentage
		},
		art: {
			artistName: art.artistName,
			artworkName: art.artworkName,
			artworkInfo: art.artworkInfo,
			artworkYear: art.artworkYear,
			imagePath: art.imagePath
		}
	};
	var responseDataJson = JSON.stringify(response);
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
	var index, item, context;
	console.log('--------------------------------------------------------------------------------');
	console.log('Server API call');
	console.log('Client counter: ' + req.body.counter);
	index = req.body.counter % artDashItems.length;
	console.log('Server index: ' + index);
  item = artDashItems[index];
	console.log('Item: ' + JSON.stringify(item));
	context = {
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