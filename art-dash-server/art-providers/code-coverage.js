(function(){

  exports.artProvider = {
    getName: function getName() {
      return 'CODE_COVERAGE';
    },
    getArt: function getArt(config, data) {
      var art = {};
      art.artistName = 'U. Kalish, T. Cochavi, G. Brafman, Z. Parush';
      art.artworkName = 'Take Cover!';
      art.artworkInfo = 'Cups and crepe';
      art.artworkYear = 2016;
      var imgId;
      if (data.percentage >= 90) {
        imgId = '9';
      } else if (data.percentage >= 80) {
        imgId = '8';
      } else if (data.percentage >= 70) {
        imgId = '7';
      } else {
        imgId = '6';
      }
      art.imagePath = 'code-coverage/cc' + imgId + '.jpg';
      return art;
    }
  }

})();

