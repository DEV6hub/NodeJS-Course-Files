'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _response = require('../util/response');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postsRouter = _express2.default.Router();

postsRouter.get('/', function (req, res) {
	res.json((0, _response2.default)({ posts: [] }, 200, 'All the Posts'));
});

postsRouter.get('/:id', function (req, res) {
	res.json((0, _response2.default)({ posts: {} }, 200, 'Retrieved Post No. ' + req.params.id));
});

postsRouter.put('/:id', function (req, res) {
	res.json((0, _response2.default)({ posts: {} }, 200, 'Updated Post No. ' + req.params.id));
});

postsRouter.delete('/:id', function (req, res) {
	res.json((0, _response2.default)({ posts: {} }, 200, 'Deleted Post No. ' + req.params.id));
});

postsRouter.delete('/', function (req, res) {
	res.json((0, _response2.default)({ posts: {} }, 200, 'Deleted all posts'));
});

exports.default = postsRouter;