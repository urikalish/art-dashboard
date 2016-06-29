(function() {

  exports.items = [
    // Sprint Status ---------------------------------------------------------------------------------------------------
    {
      description: 'Sprint Status: Sunny',
      longDisplayDuration: true,
      hideValue: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: null
        }
      },
      art: {
        provider: 'CONSTANT',
        config: {
          artistName: 'Daniel Hava',
          artworkName: 'Summer',
          artworkInfo: 'Painting',
          artworkYear: 2016,
          imagePath: 'daniel-hava/summer.jpg'
        }
      }
    },
    {
      description: 'Sprint Status: Cloudy',
      hideValue: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: null
        }
      },
      art: {
        provider: 'CONSTANT',
        config: {
          artistName: 'Daniel Hava',
          artworkName: 'Winter',
          artworkInfo: 'Painting',
          artworkYear: 2016,
          imagePath: 'daniel-hava/winter.jpg'
        }
      }
    },
    {
      description: 'Sprint Status: Sunny',
      longDisplayDuration: true,
      hideValue: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: null
        }
      },
      art: {
        provider: 'CONSTANT',
        config: {
          artistName: 'Liam Baron',
          artworkName: 'Summer',
          artworkInfo: 'Painting',
          artworkYear: 2016,
          imagePath: 'liam-baron/summer.jpg'
        }
      }
    },
    {
      description: 'Sprint Status: Cloudy',
      hideValue: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: null
        }
      },
      art: {
        provider: 'CONSTANT',
        config: {
          artistName: 'Liam Baron',
          artworkName: 'Winter',
          artworkInfo: 'Painting',
          artworkYear: 2016,
          imagePath: 'liam-baron/winter.jpg'
        }
      }
    },
    // Sprint Day ------------------------------------------------------------------------------------------------
    {
      description: 'Sprint Day',
      longDisplayDuration: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 1,
          percentage: null
        }
      },
      art: {
        provider: 'TRAIN'
      }
    },
    {
      description: 'Sprint Day',
      shortDisplayDuration: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 3,
          percentage: null
        }
      },
      art: {
        provider: 'TRAIN'
      }
    },
    {
      description: 'Sprint Day',
      shortDisplayDuration: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 5,
          percentage: null
        }
      },
      art: {
        provider: 'TRAIN'
      }
    },
    {
      description: 'Sprint Day',
      shortDisplayDuration: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 7,
          percentage: null
        }
      },
      art: {
        provider: 'TRAIN'
      }
    },
    {
      description: 'Sprint Day',
      shortDisplayDuration: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 9,
          percentage: null
        }
      },
      art: {
        provider: 'TRAIN'
      }
    },
    {
      description: 'Sprint Day',
      shortDisplayDuration: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 11,
          percentage: null
        }
      },
      art: {
        provider: 'TRAIN'
      }
    },
    {
      description: 'Sprint Day',
      shortDisplayDuration: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 14,
          percentage: null
        }
      },
      art: {
        provider: 'TRAIN'
      }
    },
    // Burn-Down Chart -------------------------------------------------------------------------------------------------
    {
      description: 'Burn-Down Chart',
      longDisplayDuration: true,
      hideValue: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: null
        }
      },
      art: {
        provider: 'CONSTANT',
        config: {
          artistName: 'U. Kalish, T. Cochavi',
          artworkName: 'Crash and Burn',
          artworkInfo: 'Matches',
          artworkYear: 2016,
          imagePath: 'misc/burn-down-chart.jpg'
        }
      }
    },
    // Done Features ---------------------------------------------------------------------------------------------------
    // {
    //   description: 'Done Features',
    //   hidePercentage: true,
    //   data: {
    //     provider: 'CONSTANT',
    //     config: {
    //       value: 0
    //     }
    //   },
    //   art: {
    //     provider: 'COLOR_TUBES'
    //   }
    // },
    {
      description: 'Done Features',
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 1
        }
      },
      art: {
        provider: 'COLOR_TUBES'
      }
    },
    {
      description: 'Done Features',
      hidePercentage: true,
      shortDisplayDuration: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 2
        }
      },
      art: {
        provider: 'COLOR_TUBES'
      }
    },
    {
      description: 'Done Features',
      hidePercentage: true,
      shortDisplayDuration: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 3
        }
      },
      art: {
        provider: 'COLOR_TUBES'
      }
    },
    {
      description: 'Done Features',
      hidePercentage: true,
      shortDisplayDuration: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 4
        }
      },
      art: {
        provider: 'COLOR_TUBES'
      }
    },
    {
      description: 'Done Features',
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 5
        }
      },
      art: {
        provider: 'COLOR_TUBES'
      }
    },
    // Gherkin Features Progress ---------------------------------------------------------------------------------------
    {
      description: 'Gherkin Features Progress',
      longDisplayDuration: true,
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
      description: 'Gherkin Features Progress',
      shortDisplayDuration: true,
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
      description: 'Gherkin Features Progress',
      shortDisplayDuration: true,
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
      description: 'Gherkin Features Progress',
      shortDisplayDuration: true,
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
      description: 'Gherkin Features Progress',
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
    // Code Coverage ---------------------------------------------------------------------------------------------------
    {
      description: 'Code Coverage',
      longDisplayDuration: true,
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
      description: 'Code Coverage',
      shortDisplayDuration: true,
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
      description: 'Code Coverage',
      shortDisplayDuration: true,
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
      description: 'Code Coverage',
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
    // Test Runs Status ------------------------------------------------------------------------------------------------
    {
      description: 'Test Runs Status',
      hideValue: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: null,
          percentage: null
        }
      },
      art: {
        provider: 'CONSTANT',
        config: {
          artistName: 'T. Cochavi, Z. Parush',
          artworkName: 'Five test runs walk into a bar...',
          artworkInfo: 'Acrylic on paper',
          artworkYear: 2016,
          imagePath: 'misc/test-runs-status.jpg'
        }
      }
    },
    // High Defects --------------------------------------------------------------------------------------------------
    {
      description: 'High Defects: 15',
      longDisplayDuration: true,
      hideValue: true,
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
      description: 'High Defects: 12',
      hideValue: true,
      shortDisplayDuration: true,
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
      description: 'High Defects: 9',
      hideValue: true,
      shortDisplayDuration: true,
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
      description: 'High Defects: 7',
      hideValue: true,
      shortDisplayDuration: true,
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
      description: 'High Defects: 5',
      hideValue: true,
      shortDisplayDuration: true,
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
      description: 'High Defects: 0',
      hideValue: true,
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
    // Fixed Defects ---------------------------------------------------------------------------------------------------
    // {
    //   description: 'Fixed Defects',
    //   data: {
    //     provider: 'CONSTANT',
    //     config: {
    //       value: 4,
    //       percentage: null
    //     }
    //   },
    //   art: {
    //     provider: 'CONSTANT',
    //     config: {
    //       artistName: 'Zeev Parush',
    //       artworkName: 'Big Number Small Beetle',
    //       artworkInfo: 'Photograph',
    //       artworkYear: 2016,
    //       imagePath: 'misc/defects-4.jpg'
    //     }
    //   }
    // },
    // Real Data -------------------------------------------------------------------------------------------------------
    {
      description: 'Done Features',
      longDisplayDuration: true,
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
    // {
    //   description: 'Done User-Stories',
    //   data: {
    //     provider: 'OCTANE',
    //     config: {
    //       type: 'COUNT_ENTITIES_BY_FIELD_VALUE_ID',
    //       url: '/work_items?query="subtype=%27story%27"',
    //       fieldName: 'phase',
    //       fieldValueId: 4025
    //     }
    //   },
    //   art: {
    //     provider: 'VAN_GOGH'
    //   }
    // },
    {
      description: 'Done Story-Points',
      longDisplayDuration: true,
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
        provider: 'CONSTANT',
        config: {
          artistName: 'G. Brafman, Z. Parush',
          artworkName: 'Story Building',
          artworkInfo: 'Jenga blocks',
          artworkYear: 2016,
          imagePath: 'misc/story-points-60.jpg'
        }
      }
    },
    {
      description: 'Fixed Defects',
      longDisplayDuration: true,
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
        provider: 'CONSTANT',
        config: {
          artistName: 'U. Kalish, Z. Parush',
          artworkName: 'Beetle on a Plastic Grass',
          artworkInfo: 'Plastic rods',
          artworkYear: 2016,
          imagePath: 'misc/defects-4.jpg'
        }
      }
    },
    {
      description: 'Urgent Defects',
      longDisplayDuration: true,
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
    }
  ];

})();
