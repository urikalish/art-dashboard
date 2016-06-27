(function() {

  var dataProviders = [
    require('./data-providers/constant.js').dataProvider,
    require('./data-providers/octane.js').dataProvider
  ];

  exports.artDashDataProvider = {

    getData: function getData(context, callback) {
      console.log('getData()');
      var i, data, dataProvider, dataProviderConfig;
      dataProvider = null;
      for (i = 0; i < dataProviders.length; i++) {
        if (dataProvider === null) {
          if (dataProviders[i].getName() === context.item.data.provider) {
            dataProvider = dataProviders[i];
            dataProviderConfig = context.item.data.config;
          }
        }
      }
      if (dataProvider) {
        data = dataProvider.getData(dataProviderConfig, context, callback);
        return data;
      }
    }
  };

})();
