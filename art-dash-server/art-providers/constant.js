(function(){

  exports.artProvider = {
    getName: function getName() {
      return 'CONSTANT';
    },
    getArt: function getArt(config, data) {
      return {
        artistName: config.artistName,
        artworkName: config.artworkName,
        artworkInfo: config.artworkInfo,
        artworkYear: config.artworkYear,
        imagePath: config.imagePath
      };
    }
  }

})();
