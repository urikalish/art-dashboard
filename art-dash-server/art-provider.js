(function() {

  var artProviders = [
    require('./art-providers/constant.js').artProvider,
    require('./art-providers/agile.js').artProvider
  ];

  exports.artDashArtProvider = {

    getArt: function getData(item, response) {

      var artProvider, i, art;
      artProvider = null;
      for (i = 0; i < artProviders.length; i++) {
        if (artProvider === null) {
          if (artProviders[i].getName() === item.art.provider) {
            artProvider = artProviders[i];
          }
        }
      }
      if (artProvider) {
        art = artProvider.getArt(response.dataValue, response.dataPercentage);
        response.artistName = art.artistName;
        response.artworkName = art.artworkName;
        response.artworkInfo = art.artworkInfo;
        response.artworkYear = art.artworkYear;
        response.imagePath = art.imagePath;
      }
    }
  };

})();
