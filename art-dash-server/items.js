(function() {

  exports.items = [
    // Done features ---------------------------------------------------------------------------------------------------
    {
      description: 'Done features',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 0
        },
        hidePercentage: true
      },
      art: {
        provider: 'COLOR_TUBES'
      }
    },
    {
      description: 'Done features',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 1
        },
        hidePercentage: true
      },
      art: {
        provider: 'COLOR_TUBES'
      }
    },
    {
      description: 'Done features',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 2
        },
        hidePercentage: true
      },
      art: {
        provider: 'COLOR_TUBES'
      }
    },
    {
      description: 'Done features',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 3
        },
        hidePercentage: true
      },
      art: {
        provider: 'COLOR_TUBES'
      }
    },
    {
      description: 'Done features',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 4
        },
        hidePercentage: true
      },
      art: {
        provider: 'COLOR_TUBES'
      }
    },
    {
      description: 'Done features',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 5
        },
        hidePercentage: true
      },
      art: {
        provider: 'COLOR_TUBES'
      }
    },
    {
      description: 'Done features',
      data: {
        provider: 'OCTANE',
        config: {
          type: 'COUNT_ENTITIES_BY_FIELD_VALUE_ID',
          url: '/work_items?query="subtype=%27feature%27"',
          fieldName: 'phase',
          fieldValueId: 4021
        }
      },
      art: {
        provider: 'AGILE'
      }
    },
    // Gherkin feature progress ----------------------------------------------------------------------------------------
    {
      description: 'Gherkin feature progress',
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: 20
        }
      },
      art: {
        provider: 'CUCUMBER'
      }
    },
    {
      description: 'Gherkin feature progress',
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: 40
        }
      },
      art: {
        provider: 'CUCUMBER'
      }
    },
    {
      description: 'Gherkin feature progress',
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: 60
        }
      },
      art: {
        provider: 'CUCUMBER'
      }
    },
    {
      description: 'Gherkin feature progress',
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: 80
        }
      },
      art: {
        provider: 'CUCUMBER'
      }
    },
    {
      description: 'Gherkin feature progress',
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: 100
        }
      },
      art: {
        provider: 'CUCUMBER'
      }
    },
    // Code coverage ---------------------------------------------------------------------------------------------------
    {
      description: 'Code coverage',
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: 60
        }
      },
      art: {
        provider: 'CODE_COVERAGE'
      }
    },
    {
      description: 'Code coverage',
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: 70
        }
      },
      art: {
        provider: 'CODE_COVERAGE'
      }
    },
    {
      description: 'Code coverage',
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: 80
        }
      },
      art: {
        provider: 'CODE_COVERAGE'
      }
    },
    {
      description: 'Code coverage',
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: 90
        }
      },
      art: {
        provider: 'CODE_COVERAGE'
      }
    },
    // Urgent defects --------------------------------------------------------------------------------------------------
    {
      description: 'Urgent defects',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 10,
          percentage: null
        }
      },
      art: {
        provider: 'BEATLES'
      }
    },
    {
      description: 'Urgent defects',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 8,
          percentage: null
        }
      },
      art: {
        provider: 'BEATLES'
      }
    },
    {
      description: 'Urgent defects',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 6,
          percentage: null
        }
      },
      art: {
        provider: 'BEATLES'
      }
    },
    {
      description: 'Urgent defects',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 4,
          percentage: null
        }
      },
      art: {
        provider: 'BEATLES'
      }
    },
    {
      description: 'Urgent defects',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 2,
          percentage: null
        }
      },
      art: {
        provider: 'BEATLES'
      }
    },
    {
      description: 'Urgent defects',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 0,
          percentage: null
        }
      },
      art: {
        provider: 'BEATLES'
      }
    },
    // Real data -------------------------------------------------------------------------------------------------------
    {
      description: 'Done stories',
      data: {
        provider: 'OCTANE',
        config: {
          type: 'COUNT_ENTITIES_BY_FIELD_VALUE_ID',
          url: '/work_items?query="subtype=%27story%27"',
          fieldName: 'phase',
          fieldValueId: 4025
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
          fieldValueId: 4025
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
          fieldValueId: 4003
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
          fieldValueId: 6006
        }
      },
      art: {
        provider: 'BEATLES'
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
    }
  ];

})();
