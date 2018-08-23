'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _response = require('../util/response');

var _response2 = _interopRequireDefault(_response);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commentsRouter = _express2.default.Router();

commentsRouter.get('/:post_id', function (req, res) {
	res.json((0, _response2.default)({ comments: [] }, 200, 'All the comments for post ' + req.params.post_id));
});

commentsRouter.put('/:comment_id/:post_id', function (req, res) {
	res.json((0, _response2.default)({ comments: {} }, 200, 'Updated Comment No. ' + req.params.comment_id + ' for Post No. ' + req.params.post_id));
});

commentsRouter.delete('/:comment_id', function (req, res) {
	res.json((0, _response2.default)({ comments: [] }, 200, 'Deleted Comment No. ' + req.params.comment_id));
});

exports.default = commentsRouter;