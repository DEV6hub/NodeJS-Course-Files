'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Called from promise.js when route is /ping
router.head('/', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'NewTorontoGroup': 'Node.js Training',
    'Cache-Control': 'no-cache'
  });
  res.end();
});

exports.default = router;