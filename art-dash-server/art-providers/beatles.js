(function(){

  exports.artProvider = {
    getName: function getName() {
      return 'BEATLES';
    },
    getArt: function getArt(config, data) {
      var art = {};
      art.artistName = 'Zeev Parush';
      art.artworkName = 'Beatles';
      art.artworkInfo = 'Photograph';
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
      art.imagePath = 'beatles/b' + imgId + '.jpg';
      return art;
    }
  }

})();

