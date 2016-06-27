(function() {

  exports.items = [
    {
      description: 'Done features',
      data: {
        provider: 'OCTANE',
        config: {
          type: 'COUNT_ENTITIES_BY_FIELD_VALUE_ID',
          url: '/work_items?query="subtype=%27feature%27"',
          fieldName: 'phase',
          fieldValueId: 2358
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
          type: 'COUNT_ENTITIES_BY_FIELD_VALUE_ID',
          url: '/work_items?query="subtype=%27story%27"',
          fieldName: 'phase',
          fieldValueId: 2362
        }
      },
      art: {
        provider: 'AGILE'
      }
    },
    {
      description: 'Done story points',
      data: {
        provider: 'OCTANE',
        config: {
          type: 'SUM_VALUE_BY_FIELD_VALUE_ID',
          url: '/work_items?query="subtype=%27story%27"',
          sumFieldName: 'story_points',
          fieldName: 'phase',
          fieldValueId: 2362
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
          type: 'COUNT_ENTITIES_BY_FIELD_VALUE_ID',
          url: '/defects',
          fieldName: 'phase',
          fieldValueId: 2342
        }
      },
      art: {
        provider: 'AGILE'
      }
    },
    {
      description: 'Urgent defects',
      data: {
        provider: 'OCTANE',
        config: {
          type: 'COUNT_ENTITIES_BY_FIELD_VALUE_ID',
          url: '/defects',
          fieldName: 'severity',
          fieldValueId: 3062
        }
      },
      art: {
        provider: 'AGILE'
      }
    },
    {
      description: 'Sprint time-line',
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
      description: 'Sprint status',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 23,
          percentage: 23
        }
      },
      art: {
        provider: 'CONSTANT',
        config: {
          artistName: 'Uri Kalish',
          artworkName: 'Sad Clown',
          artworkInfo: '1200x1200',
          artworkYear: 2016,
          imagePath: 'agile/sad-clown.jpg'
        }
      }
    },
    {
      description: 'Burn down chart',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 23,
          percentage: 23
        }
      },
      art: {
        provider: 'CONSTANT',
        config: {
          artistName: 'Uri Kalish',
          artworkName: 'Matches',
          artworkInfo: '1200x900',
          artworkYear: 2016,
          imagePath: 'agile/burn-down.jpg'
        }
      }
    },
    {
      description: 'Tests status',
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
          imagePath: 'van-gogh/vg2.jpg'
        }
      }
    },
    {
      description: 'Code coverage',
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
    }
  ];

})();
