(function(){

  var request = require('request');
  var cookie = require('cookie');

  const OCTANE_SERVER = 'https://hackathon.almoctane.com';
  const SHAREDSPACE_ID = 1001;
  const WORKSPACE_ID = 1002;

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
        user: 'hackathon@user',
        password: 'Mission-impossible'
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

  function afterLogin(requestor) {
    console.log('afterLogin()');
    _requestor = requestor;
  }

  function getFixedDefects(config, context, callback) {
    _requestor.get('/defects/2215', function(error, message, defect) {
      console.log('Defect #' + defect.id + ': Name: ' + defect.name + ', Desc: ' + defect.description);
      var data = {
        value: config.value,
        percentage: config.percentage
      };
      callback(context, data);
    });
  }

  login(_requestor, afterLogin);

  exports.dataProvider = {

    getName: function getName() {
      return 'OCTANE';
    },
    getData: function getData(config, context, callback) {
      if (config.type === 'FIXED_DEFECTS') {
        getFixedDefects(config, context, callback);
      }
    }
  }

})();
