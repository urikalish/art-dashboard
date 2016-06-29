(function(){

  exports.artProvider = {
    getName: function getName() {
      return 'COLOR_TUBES';
    },
    getArt: function getArt(config, data) {
      var art = {};
      art.artistName = 'Z. Parush';
      art.artworkName = 'Code Crafting';
      art.artworkInfo = 'Color tubes';
      art.artworkYear = 2016;
      var imgId;
      imgId = data.value;
      art.imagePath = 'color-tubes/ct' + imgId + '.jpg';
      return art;
    }
  }

})();

