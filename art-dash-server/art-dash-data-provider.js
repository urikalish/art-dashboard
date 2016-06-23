var artDashDataProvider = {

  getData: function getData(imageIndex) {

    var artworks = require('./data/van-gogh.js').artworks;

    var artwork = (imageIndex % 2 == 0) ? artworks[0] : artworks[1];

    var responseData = {
      imageIndex: imageIndex,
      dataString: '78 story points left in the feature',
      dataNumber: -1,
      artistName: artwork.artistName,
      artworkName: artwork.artworkName,
      artworkInfo: artwork.artworkInfo,
      artworkYear: artwork.artworkYear,
      imagePath: artwork.imagePath
    };
    var responseDataJson = JSON.stringify(responseData, null, 4);
    console.log(responseDataJson);
    return responseDataJson;
  }
};

exports.artDashDataProvider = artDashDataProvider;
