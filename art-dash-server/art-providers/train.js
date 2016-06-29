(function(){

  exports.artProvider = {
    getName: function getName() {
      return 'TRAIN';
    },
    getArt: function getArt(config, data) {
      var art = {};
      art.artistName = 'A. Weisberg, T. Cochavi, U. Kalish';
      art.artworkName = 'On Track';
      art.artworkInfo = 'Wood';
      art.artworkYear = 2016;
      if (data.value >= 12) {
        imgId = 7;
      } else if (data.value >= 10) {
        imgId = 6;
      } else if (data.value >= 8) {
        imgId = 5;
      } else if (data.value >= 6) {
        imgId = 4;
      } else if (data.value >= 4) {
        imgId = 3;
      } else if (data.value >= 2) {
        imgId = 2;
      } else {
        imgId = 1;
      }
      art.imagePath = 'train/t' + imgId + '.jpg';
      return art;
    }
  }

})();

