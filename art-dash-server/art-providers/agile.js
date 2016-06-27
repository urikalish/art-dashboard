(function(){

  exports.artProvider = {
    getName: function getName() {
      return 'AGILE';
    },
    getArt: function getArt(config, data) {
      var art = {};
      art.artistName = 'Vincent van Gogh';
      art.artworkName = 'Starry Night Over the Rhone';
      art.artworkInfo = 'Musée d\'Orsay, Paris';
      art.artworkYear = 1888;
      art.imagePath = 'van-gogh/vg2.jpg';
      return art;
    }
  }

})();
