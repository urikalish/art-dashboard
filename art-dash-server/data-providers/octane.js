(function(){

  //https://hackathon.almoctane.com/api/shared_spaces/1001/workspaces/3001/work_items?query=%22subtype=%27feature%27%22
  //https://hackathon.almoctane.com/api/shared_spaces/1001/workspaces/3001/work_items?query=%22subtype=%27story%27%22
  //https://hackathon.almoctane.com/api/shared_spaces/1001/workspaces/3001/defects/

  const OCTANE_SERVER = 'https://hackathon.almoctane.com';
  const SHAREDSPACE_ID = 1001;
  const WORKSPACE_ID = 3001;
  const LOGIN_EVERY_NUM_OF_SECONDS = 300;

  var request = require('request');
  var cookie = require('cookie');
  var _lastLoginTime = 0;

// create the cookie jar that is needed for authentication
  var _requestor = request.defaults({
    jar: true,
    baseUrl: OCTANE_SERVER,
    json: true,
    // if running from within HPE you will need to set a proxy.  Change according to nearest proxy
    proxy: 'http://web-proxy.il.hpecorp.net:8080'
  });

  /**
   * Use to log in. Returns the HPSSO_COOKIE_CSRF header which needs to be reused with all communication to the server
   * @param requestor The request object used for HTTP
   * @param callback The callback that will be called once login is successful
   * @returns {*}
   */
  function login(requestor, callback) {

    console.log('login()');
    var HPSSO_COOKIE_CSRF = null;

    requestor.post({
      uri: '/authentication/sign_in',
      body: {
        // user: 'hackathon@user',
        // password: 'Mission-impossible'
        client_id: 'Kalish_yvqdzod98x4jdiweydg3x6g3o',
        client_secret: '%34262139d850cf23S'
        /**
         * alternatively you can use API key like this
         * client_id: '', // put API KEY here
         * client_secret: '' // PUT API SECRET HERE
         */
      }
    }, function (error, response) {
      if (error) {
        console.error(error);
        // do something with error...
        return;
      }
      var cookies = response.headers['set-cookie'];
      if (cookies) {
        cookies.forEach(function (value) {
          var parsedCookie = cookie.parse(value);
          if (parsedCookie.HPSSO_COOKIE_CSRF) {
            HPSSO_COOKIE_CSRF = parsedCookie.HPSSO_COOKIE_CSRF;
          }
        });
      } else {
        // problem getting cookies; something happened
      }

      requestor = requestor.defaults({
        baseUrl: (OCTANE_SERVER + '/api/shared_spaces/' + SHAREDSPACE_ID + '/workspaces/' + WORKSPACE_ID),
        headers: {
          'HPSSO_HEADER_CSRF': HPSSO_COOKIE_CSRF,
          'HPSSO-HEADER-CSRF': HPSSO_COOKIE_CSRF
        }
      });
      callback(requestor);
    });
  }

  function ensureLoggedIn(callback) {
    if (((new Date()).getTime()) - _lastLoginTime > LOGIN_EVERY_NUM_OF_SECONDS * 1000) {
      console.log('Logging in to ALM Octane...');
      login(_requestor, function(requestor) {
        console.log('Logged in to ALM Octane');
        _requestor = requestor;
        _lastLoginTime =  (new Date()).getTime();
        callback();
      });
    } else {
      callback();
    }
  }

  function countEntitiesByFieldValueId(config, context, callback) {
    _requestor.get(config.url, function(error, message, entities) {
      console.log('getEntitiesByFieldValueId() callback');
      //console.log('message: ' + JSON.stringify(message, null, 4));
      //console.log('error: ' + JSON.stringify(error, null, 4));
      var i, totalCount, filteredCount;
      totalCount = entities['total_count'];
      console.log('Number of entities: ' + totalCount);
      filteredCount = 0;
      for (i = 0; i < totalCount; i++) {
        if (entities.data[i][config.fieldName].id === config.fieldValueId) {
          filteredCount++;
        }
      }
      console.log('Number of filtered entities: ' + filteredCount);
      var data = {
        value: filteredCount,
        percentage: totalCount === 0 ? 0 : Math.floor(filteredCount / totalCount * 100)
      };
      callback(context, data);
    });
  }

  function sumValueByFieldValueId(config, context, callback) {
    _requestor.get(config.url, function(error, message, entities) {
      console.log('sumValueByFieldValueId() callback');
      //console.log('message: ' + JSON.stringify(message, null, 4));
      //console.log('error: ' + JSON.stringify(error, null, 4));
      var i, totalCount, totalSum, filteredSum, value;
      totalCount = entities['total_count'];
      console.log('Number of entities: ' + totalCount);
      totalSum = 0;
      filteredSum = 0;
      for (i = 0; i < totalCount; i++) {
        value = entities.data[i][config.sumFieldName];
        if (value) {
          totalSum += value;
          if (entities.data[i][config.fieldName].id === config.fieldValueId) {
            filteredSum += value;
          }
        }
      }
      console.log('Total sum: ' + totalSum);
      console.log('Filtered sum: ' + filteredSum);
      var data = {
        value: filteredSum,
        percentage: totalSum === 0 ? 0 : Math.floor(filteredSum / totalSum * 100)
      };
      callback(context, data);
    });
  }

  exports.dataProvider = {

    getName: function getName() {
      return 'OCTANE';
    },
    getData: function getData(config, context, callback) {
      ensureLoggedIn(function() {
        if (config.type === 'COUNT_ENTITIES_BY_FIELD_VALUE_ID') {
          countEntitiesByFieldValueId(config, context, callback);
        } else if (config.type === 'SUM_VALUE_BY_FIELD_VALUE_ID') {
          sumValueByFieldValueId(config, context, callback);
        }
      });
    }
  }

})();
