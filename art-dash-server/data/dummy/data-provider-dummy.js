(function() {

  exports.dataProvider = {

    getName: function getName() {
      return 'dummy';
    },
    getData: function getData(config) {
      return {
        value: config.value,
        percentage: config.percentage
      }
    }

  }

})();
