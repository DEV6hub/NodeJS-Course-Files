'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _response = require('../util/response');

var _response2 = _interopRequireDefault(_response);

var _db_helpers = require('../util/db_helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postsRouter = _express2.default.Router();

postsRouter.get('/', function (req, res) {
	_db_helpers.Posts.getAll().then(function (posts) {
		return (0, _response2.default)(res, { posts: posts }, 200, 'All Posts');
	}).catch(function (err) {
		return (0, _response2.default)(res, {}, 500, 'Failed to get all posts');
	});
});

postsRouter.get('/:id', function (req, res) {
	_db_helpers.Posts.get(req.params.id).then(function (post) {
		return (0, _response2.default)(res, { post: post }, 200, 'Retrieved Post number ' + req.params.id);
	}).catch(function (err) {
		return (0, _response2.default)(res, {}, 500, 'Failed to get post');
	});
});

postsRouter.post('/', function (req, res) {
	_db_helpers.Posts.create(req.body).then(function (posts) {
		return (0, _response2.default)(res, { posts: posts }, 200, 'Successfully created new post.');
	}).catch(function (err) {
		return (0, _response2.default)(res, {}, 500, 'Failed to get create post');
	});
});

postsRouter.put('/:id', function (req, res) {
	_db_helpers.Posts.update(req.params.id, req.body).then(function (updatedPost) {
		return (0, _response2.default)(res, { post: updatedPost }, 200, 'Successfully updated the post');
	}).catch(function (err) {
		return (0, _response2.default)(res, {}, 500, 'Failed to update the post.');
	});
});

postsRouter.delete('/:id', function (req, res) {
	_db_helpers.Posts.delete(req.params.id).then(function (posts) {
		return (0, _response2.default)(res, { posts: posts }, 200, 'Successfully deleted the post');
	}).catch(function (err) {
		return (0, _response2.default)(res, {}, 500, 'Failed to delete the post');
	});
});

exports.default = postsRouter;