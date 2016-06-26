(function() {

  exports.items = [
    {
      desc: 'Number of story points',
      data: {
        provider: 'constant',
        config: {
          value: 42,
          percentage: 42
        }
      },
      art: {
        provider: 'constant',
        config: {
          artistName: 'Vincent van Gogh',
          artworkName: 'The Starry Night',
          artworkInfo: 'The Museum of Modern Art, New York',
          artworkYear: 1889,
          imagePath: 'van-gogh/vg1.jpg'
        }
      }
    },
    {
      desc: 'Number of defects',
      data: {
        provider: 'octane',
        config: {
          value: 75,
          percentage: 75
        }
      },
      art: {
        provider: 'agile'
      }
    }
  ];

})();
