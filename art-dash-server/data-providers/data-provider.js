(function() {

  var dataProviders = [
    require('./dummy/data-provider-dummy.js').dataProvider,
    require('./octane/data-provider-octane.js').dataProvider
  ];

  exports.artDashDataProvider = {

    getData: function getData(item, response) {

      var data, i, dataProvider, dataProviderConfig;
      dataProvider = null;
      for (i = 0; i < dataProviders.length; i++) {
        if (dataProvider === null) {
          if (dataProviders[i].getName() === item.data.provider) {
            dataProvider = dataProviders[i];
            dataProviderConfig = item.data.config;
          }
        }
      }
      if (dataProvider) {
        data = dataProvider.getData(dataProviderConfig);
        response.dataValue = data.value;
        response.dataPercentage = data.percentage;
      }
    }
  };

})();
