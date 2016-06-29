(function(){

  exports.artProvider = {
    getName: function getName() {
      return 'BEETLES';
    },
    getArt: function getArt(config, data) {
      var art = {};
      art.artistName = 'U. Kalish, T. Cochavi, G. Brafman, Z. Parush';
      art.artworkName = 'Out of Their Element';
      art.artworkInfo = 'Lego and wood';
      art.artworkYear = 2016;
      var imgId;
      if (data.value >= 10) {
        imgId = 10;
      } else if (data.value >= 8) {
        imgId = 8;
      } else if (data.value >= 6) {
        imgId = 6;
      } else if (data.value >= 4) {
        imgId = 4;
      } else if (data.value > 0) {
        imgId = 2;
      } else {
        imgId = 0;
      }
      art.imagePath = 'beetles/b' + imgId + '.jpg';
      return art;
    }
  }

})();

