(function() {

  exports.items = [
    // Sprint status ---------------------------------------------------------------------------------------------------
    {
      description: 'Sprint status',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 0,
          percentage: 0
        },
        hideValue: true,
        hidePercentage: true
      },
      art: {
        provider: 'VAN_GOGH'
      }
    },
    // Sprint time-line ------------------------------------------------------------------------------------------------
    {
      description: 'Sprint time-line',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 0,
          percentage: 0
        },
        hideValue: true,
        hidePercentage: true
      },
      art: {
        provider: 'VAN_GOGH'
      }
    },
    // Burn down chart -------------------------------------------------------------------------------------------------
    {
      description: 'Burn down chart',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 0,
          percentage: 0
        },
        hideValue: true,
        hidePercentage: true
      },
      art: {
        provider: 'VAN_GOGH'
      }
    },
    // Done features ---------------------------------------------------------------------------------------------------
    {
      description: 'Done features',
      shortDisplay: true,
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
      shortDisplay: true,
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
      shortDisplay: true,
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
      shortDisplay: true,
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
      shortDisplay: true,
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
      shortDisplay: true,
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
    // Gherkin feature progress ----------------------------------------------------------------------------------------
    {
      description: 'Gherkin feature progress',
      shortDisplay: true,
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
      shortDisplay: true,
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
      shortDisplay: true,
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
      shortDisplay: true,
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
      shortDisplay: true,
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
    // Done story points -----------------------------------------------------------------------------------------------
    {
      description: 'Done story points',
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: 60
        }
      },
      art: {
        provider: 'CONSTANT',
        config: {
          artistName: 'Zeev Parush',
          artworkName: 'Story points tower',
          artworkInfo: 'Photograph',
          artworkYear: 2016,
          imagePath: 'misc/story-points-60.jpg'
        }
      }
    },
    // Code coverage ---------------------------------------------------------------------------------------------------
    {
      description: 'Code coverage',
      shortDisplay: true,
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
      shortDisplay: true,
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
      shortDisplay: true,
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
      shortDisplay: true,
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
    // Test runs status ------------------------------------------------------------------------------------------------
    {
      description: 'Test runs status',
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: null
        },
        hideValue: true,
        hidePercentage: true
      },
      art: {
        provider: 'CONSTANT',
        config: {
          artistName: 'Zeev Parush',
          artworkName: 'Story points tower',
          artworkInfo: 'Photograph',
          artworkYear: 2016,
          imagePath: 'misc/test-runs-status.jpg'
        }
      }
    },
    // Urgent defects --------------------------------------------------------------------------------------------------
    {
      description: 'Urgent defects',
      shortDisplay: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 10,
          percentage: null
        }
      },
      art: {
        provider: 'BEETLES'
      }
    },
    {
      description: 'Urgent defects',
      shortDisplay: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 8,
          percentage: null
        }
      },
      art: {
        provider: 'BEETLES'
      }
    },
    {
      description: 'Urgent defects',
      shortDisplay: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 6,
          percentage: null
        }
      },
      art: {
        provider: 'BEETLES'
      }
    },
    {
      description: 'Urgent defects',
      shortDisplay: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 4,
          percentage: null
        }
      },
      art: {
        provider: 'BEETLES'
      }
    },
    {
      description: 'Urgent defects',
      shortDisplay: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 2,
          percentage: null
        }
      },
      art: {
        provider: 'BEETLES'
      }
    },
    {
      description: 'Urgent defects',
      shortDisplay: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 0,
          percentage: null
        }
      },
      art: {
        provider: 'BEETLES'
      }
    },
    // Fixed defects ---------------------------------------------------------------------------------------------------
    {
      description: 'Fixed defects',
      data: {
        provider: 'CONSTANT',
        config: {
          value: 4,
          percentage: null
        }
      },
      art: {
        provider: 'CONSTANT',
        config: {
          artistName: 'Zeev Parush',
          artworkName: 'Big Number Small Beetle',
          artworkInfo: 'Photograph',
          artworkYear: 2016,
          imagePath: 'misc/defects-4.jpg'
        }
      }
    },
    // Real data -------------------------------------------------------------------------------------------------------
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
        provider: 'COLOR_TUBES'
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
          fieldValueId: 4025
        }
      },
      art: {
        provider: 'VAN_GOGH'
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
        provider: 'VAN_GOGH'
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
        provider: 'BEETLES'
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
        provider: 'VAN_GOGH'
      }
    }
  ];

})();
