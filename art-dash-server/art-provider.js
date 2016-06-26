(function() {

  var artProviders = [
    require('./art-providers/constant.js').artProvider,
    require('./art-providers/agile.js').artProvider
  ];

  exports.artDashArtProvider = {

    getArt: function getData(context, data) {
      console.log('getArt()');
      var artProvider, i, art;
      artProvider = null;
      for (i = 0; i < artProviders.length; i++) {
        if (artProvider === null) {
          if (artProviders[i].getName() === context.item.art.provider) {
            artProvider = artProviders[i];
          }
        }
      }
      if (artProvider) {
        art = artProvider.getArt(data.value, data.percentage);
        console.log('Art: ' + JSON.stringify(art));
        return art;
      }
    }
  };

})();
