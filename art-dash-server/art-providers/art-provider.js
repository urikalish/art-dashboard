(function() {

  var artProviders = [
    require('./van-gogh/series1.js').artProvider
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
        art = artProvider.getArt(response.dataPercent);
        response.artistName = art.artistName;
        response.artworkName = art.artworkName;
        response.artworkInfo = art.artworkInfo;
        response.artworkYear = art.artworkYear;
        response.imagePath = art.imagePath;
      }
    }
  };

})();
