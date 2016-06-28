(function() {

  var artProviders = [
    require('./art-providers/cucumber.js').artProvider,
    require('./art-providers/color-tubes.js').artProvider,
    require('./art-providers/beetles.js').artProvider,
    require('./art-providers/code-coverage.js').artProvider,
    require('./art-providers/constant.js').artProvider,
    require('./art-providers/agile.js').artProvider
  ];

  exports.artDashArtProvider = {

    getArt: function getData(context, data) {
      console.log('getArt()');
      var i, art, artProvider, artProviderConfig;
      artProvider = null;
      for (i = 0; i < artProviders.length; i++) {
        if (artProvider === null) {
          if (artProviders[i].getName() === context.item.art.provider) {
            artProvider = artProviders[i];
            artProviderConfig = context.item.art.config;
          }
        }
      }
      if (artProvider) {
        art = artProvider.getArt(artProviderConfig, data);
        console.log('Art: ' + JSON.stringify(art));
        return art;
      }
    }
  };

})();
