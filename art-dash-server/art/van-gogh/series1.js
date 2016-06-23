(function(){

  exports.artProvider = {
    getName: function getName() {
      return 'van-gogh-series1';
    },
    getArt: function getArt(dataPercent) {
      var art = {};
      art.artistName = 'Vincent van Gogh';

      if (dataPercent % 2 === 0) {
        art.artworkName = 'The Starry Night';
        art.artworkInfo = 'The Museum of Modern Art, New York';
        art.artworkYear = 1889;
        art.imagePath = 'van-gogh/series1/vg1.jpg';
      } else {
        art.artworkName = 'Starry Night Over the Rhone';
        art.artworkInfo = 'Musée d\'Orsay, Paris';
        art.artworkYear = 1888;
        art.imagePath = 'van-gogh/series1/vg2.jpg';
      }
      return art;
    }
  }

})();
