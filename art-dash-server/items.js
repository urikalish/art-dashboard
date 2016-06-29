(function() {

  exports.items = [
    // Sprint Status ---------------------------------------------------------------------------------------------------
    {
      description: 'Sprint Status',
      hideValue: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 0,
          percentage: 0
        }
      },
      art: {
        provider: 'VAN_GOGH'
      }
    },
    // Sprint Time-Line ------------------------------------------------------------------------------------------------
    {
      description: 'Sprint Time-Line',
      hideValue: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 0,
          percentage: 0
        }
      },
      art: {
        provider: 'VAN_GOGH'
      }
    },
    // Burn-Down Chart -------------------------------------------------------------------------------------------------
    {
      description: 'Burn-Down Chart',
      hideValue: true,
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 0,
          percentage: 0
        }
      },
      art: {
        provider: 'VAN_GOGH'
      }
    },
    // Done Features ---------------------------------------------------------------------------------------------------
    {
      description: 'Done Features',
      hidePercentage: true,
      data: {
        provider: 'CONSTANT',
        config: {
          value: 0
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
      shortDisplayDuration: true,
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
      shortDisplayDuration: true,
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
    // Done Story-Points -----------------------------------------------------------------------------------------------
    // {
    //   description: 'Done Story-Points',
    //   data: {
    //     provider: 'CONSTANT',
    //     config: {
    //       value: null,
    //       percentage: 60
    //     }
    //   },
    //   art: {
    //     provider: 'CONSTANT',
    //     config: {
    //       artistName: 'Zeev Parush',
    //       artworkName: 'Story points tower',
    //       artworkInfo: 'Photograph',
    //       artworkYear: 2016,
    //       imagePath: 'misc/story-points-60.jpg'
    //     }
    //   }
    // },
    // Code Coverage ---------------------------------------------------------------------------------------------------
    {
      description: 'Code Coverage',
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
      shortDisplayDuration: true,
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
          artistName: 'Zeev Parush',
          artworkName: 'Story points tower',
          artworkInfo: 'Photograph',
          artworkYear: 2016,
          imagePath: 'misc/test-runs-status.jpg'
        }
      }
    },
    // Urgent Defects --------------------------------------------------------------------------------------------------
    {
      description: 'Urgent Defects: 15',
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
      description: 'Urgent Defects: 12',
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
      description: 'Urgent Defects: 9',
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
      description: 'Urgent Defects: 7',
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
      description: 'Urgent Defects: 5',
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
      description: 'Urgent Defects: 0',
      hideValue: true,
      shortDisplayDuration: true,
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
          artistName: 'Zeev Parush',
          artworkName: 'Story points tower',
          artworkInfo: 'Photograph',
          artworkYear: 2016,
          imagePath: 'misc/story-points-60.jpg'
        }
      }
    },
    {
      description: 'Urgent Defects',
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
      description: 'Fixed Defects',
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
          artistName: 'Zeev Parush',
          artworkName: 'Big Number Small Beetle',
          artworkInfo: 'Photograph',
          artworkYear: 2016,
          imagePath: 'misc/defects-4.jpg'
        }
      }
    }
  ];

})();
