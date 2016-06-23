(function(){

  exports.dataProvider = {

    getName: function getName() {
      return 'octane-dummy-data';
    },
    getData: function getData(config) {
      return {
        dataString: config.val === 0 ? '42 story points left in the feature' : '75 story points left in the feature',
        dataPercent: config.val === 0 ? 42 : 75
      }
    }
  }

})();
