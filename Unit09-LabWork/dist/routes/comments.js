"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _response = require("../util/response");

var _response2 = _interopRequireDefault(_response);

var _db_helpers = require("../util/db_helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commentsRouter = _express2.default.Router();

commentsRouter.get('/:post_id', function (req, res) {
	_db_helpers.Comments.getAll(req.params.post_id).then(function (comments) {
		return (0, _response2.default)(res, { comments: comments }, 200, "Successfully fetched comments.");
	}).catch(function (err) {
		return (0, _response2.default)(res, {}, 500, "Failed to get comments for Post No. " + req.params.post_id);
	});
});

commentsRouter.post('/:post_id/:person_id', function (req, res) {
	_db_helpers.Comments.create(req.params.post_id, req.params.person_id).then(function (comments) {
		return (0, _response2.default)(res, { comments: comments }, 200, 'Successfully created comment');
	}).catch(function (err) {
		return (0, _response2.default)(res, {}, 500, 'Failed to create comment.');
	});
});

commentsRouter.put('/:comment_id/:post_id', function (req, res) {
	res.json((0, _response2.default)({ comments: {} }, 200, "Updated Comment No. " + req.params.comment_id + " for Post No. " + req.params.post_id));
});

commentsRouter.delete('/:comment_id', function (req, res) {
	res.json((0, _response2.default)({ comments: [] }, 200, "Deleted Comment No. " + req.params.comment_id));
});

exports.default = commentsRouter;