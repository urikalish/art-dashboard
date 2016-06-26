(function() {

  exports.items = [
    {
      description: 'Number of story points',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 42,
          percentage: 42
        }
      },
      art: {
        provider: 'CONSTANT',
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
      description: 'Fixed defects',
      data: {
        provider: 'OCTANE',
        config: {
          type: 'FIXED_DEFECTS'
        }
      },
      art: {
        provider: 'AGILE'
      }
    }
  ];

})();
