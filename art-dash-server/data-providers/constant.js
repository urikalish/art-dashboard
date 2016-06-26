(function() {

  exports.dataProvider = {

    getName: function getName() {
      return 'CONSTANT';
    },
    getData: function getData(config, context, callback) {
      var data = {
        value: config.value,
        percentage: config.percentage
      };
      callback(context, data);
    }

  }

})();
