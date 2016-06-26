(function() {

  exports.dataProvider = {

    getName: function getName() {
      return 'constant';
    },
    getData: function getData(config) {
      return {
        value: config.value,
        percentage: config.percentage
      }
    }

  }

})();
