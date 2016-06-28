(function(){

  exports.artProvider = {
    getName: function getName() {
      return 'CUCUMBER';
    },
    getArt: function getArt(config, data) {
      var art = {};
      art.artistName = 'Zeev Parush';
      art.artworkName = 'Cucumber';
      art.artworkInfo = 'Photograph';
      art.artworkYear = 2016;
      var imgId;
      if (data.percentage === 100) {
        imgId = 5;
      } else if (data.percentage >= 80) {
        imgId = 4;
      } else if (data.percentage >= 60) {
        imgId = 3;
      } else if (data.percentage >= 40) {
        imgId = 2;
      } else {
        imgId = 1;
      }
      art.imagePath = 'cucumber/cucumber' + imgId + '.jpg';
      return art;
    }
  }

})();

