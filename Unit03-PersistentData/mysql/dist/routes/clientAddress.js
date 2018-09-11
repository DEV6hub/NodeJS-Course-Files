'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// GET http://localhost:3000/getClientAddress

router.get('/', function (req, res) {
  res.send('address...');
});

// GET http://localhost:3000/getClientAddress/foobar/

router.get('/foobar', function (req, res) {
  res.send('address/foobar....');
});

exports.default = router;