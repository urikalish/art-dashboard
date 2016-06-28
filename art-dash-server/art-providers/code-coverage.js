(function(){

  exports.artProvider = {
    getName: function getName() {
      return 'CODE_COVERAGE';
    },
    getArt: function getArt(config, data) {
      var art = {};
      art.artistName = 'Uri Kalish';
      art.artworkName = 'Code Coverage';
      art.artworkInfo = 'Photograph';
      art.artworkYear = 2016;
      var imgId;
      if (data.percentage >= 90) {
        imgId = 'high';
      } else if (data.percentage >= 80) {
        imgId = 'medium';
      } else {
        imgId = 'low';
      }
      art.imagePath = 'code-coverage/' + imgId + '.jpg';
      return art;
    }
  }

})();

