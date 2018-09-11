'use strict';

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _errorhandler = require('errorhandler');

var _errorhandler2 = _interopRequireDefault(_errorhandler);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ping = require('./routes/ping');

var _ping2 = _interopRequireDefault(_ping);

var _loginUser = require('./routes/loginUser');

var _loginUser2 = _interopRequireDefault(_loginUser);

var _shirts = require('./routes/shirts');

var _shirts2 = _interopRequireDefault(_shirts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Use "npm install" to install all required node modules
 *
 * Use the Chrome POSTMAN add-on or similar to issue
 * a POST request to http://localhost:3000/loginUser
 * with form field: paramsJSON = {"userName":"myUserName", "password":"myPassword"}
 */

var app = (0, _express2.default)();
// new modules


if (_os2.default.type() === 'Windows_NT') {
  console.log('Routing with Express: You\'re on Windows.');
} else {
  console.log('Routing with Express: You\'re on OSX or Linux.');
}

app.use((0, _compression2.default)());
app.set('port', 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  app.use((0, _errorhandler2.default)());
}

// Load ping router, which has a head request at '/' registered to it
app.use('/ping', _ping2.default);
// Load LoginUser router, which has a post request at '/' registered to it
app.use('/loginUser', _loginUser2.default);

app.use('/shirts', _shirts2.default);

app.listen(app.get('port'), function () {
  console.log('HTTP/Express server listening on port ' + app.get('port'));
});