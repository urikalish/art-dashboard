(function() {

  exports.items = [
    {
      description: 'Sprint position',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 50,
          percentage: 50
        }
      },
      art: {
        provider: 'CONSTANT',
        config: {
          artistName: 'Uri Kalish',
          artworkName: 'Running Track',
          artworkInfo: '2560x1600',
          artworkYear: 2016,
          imagePath: 'agile/running-track.jpg'
        }
      }
    },
    {
      description: 'Feature progress',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 42,
          percentage: 84
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
      description: 'Urgent defects',
      data: {
        provider: 'OCTANE',
        config: {
          type: 'ENTITIES_BY_FIELD_VALUE_ID',
          url: '/defects',
          fieldName: 'severity',
          fieldValueId: 1006
        }
      },
      art: {
        provider: 'AGILE'
      }
    },
    {
      description: 'Fixed defects',
      data: {
        provider: 'OCTANE',
        config: {
          type: 'ENTITIES_BY_FIELD_VALUE_ID',
          url: '/defects',
          fieldName: 'phase',
          fieldValueId: 1003
        }
      },
      art: {
        provider: 'AGILE'
      }
    },
    {
      description: 'Done stories',
      data: {
        provider: 'OCTANE',
        config: {
          type: 'ENTITIES_BY_FIELD_VALUE_ID',
          url: '/work_items?query="subtype=%27story%27"',
          fieldName: 'phase',
          fieldValueId: 1025
        }
      },
      art: {
        provider: 'AGILE'
      }
    }
  ];

})();
