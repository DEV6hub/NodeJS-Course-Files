'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Comments = exports.Posts = undefined;

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Posts = exports.Posts = {
	getAll: function getAll() {
		return new Promise(function (resolve, reject) {
			_db2.default.query('SELECT * FROM Posts', function (err, rows) {
				if (err) {
					console.log('Get all posts', err);
					reject(err);
				}
				console.log('Get all posts', rows);
				resolve(rows);
			});
		});
	},
	get: function get(id) {
		return new Promise(function (resolve, reject) {
			_db2.default.query('SELECT * FROM Posts WHERE id = ' + id, function (err, rows) {
				if (err) {
					reject(err);
				}
				resolve(rows[0]);
			});
		});
	},
	create: function create(post) {
		return new Promise(function (resolve, reject) {
			_db2.default.query('INSERT INTO Posts SET ?', post, function (err, rows) {
				if (err) {
					console.log(err);
					reject(err);
				}
				resolve(Posts.getAll());
			});
		});
	},
	update: function update(id, post) {
		return new Promise(function (resolve, reject) {
			_db2.default.query('UPDATE Posts SET ? WHERE id = ?', [post, id], function (err, rows) {
				if (err) {
					console.log(err);
					reject(err);
				}
				resolve(Posts.get(id));
			});
		});
	},
	delete: function _delete(id) {
		return new Promise(function (resolve, reject) {
			_db2.default.query('DELETE FROM Posts WHERE id = ' + id, function (err, rows) {
				if (err) {
					console.log(err);
					reject(err);
				}
				resolve(Posts.getAll());
			});
		});
	}
};

var Comments = exports.Comments = {
	getAll: function getAll(post_id) {
		return new Promise(function (resolve, reject) {
			_db2.default.query('SELECT * FROM Comments where post_id = ?', post_id, function (err, rows) {
				if (err) {
					reject(err);
				}
				resolve(rows);
			});
		});
	},
	create: function create(post_id, person_id) {
		return new Promise(function (resolve, reject) {
			_db2.default.query('INSERT INTO Comments SET ?', { post_id: post_id, person_id: person_id }, function (err, rows) {
				if (err) {
					console.log(err);
					reject(err);
				}
				resolve(Comments.getAll());
			});
		});
	},
	update: function update(id) {
		return new Promise(function (resolve, reject) {
			_db2.default.query('UPDATE Posts SET ? WHERE id = ?', [post, id], function (err, rows) {
				if (err) {
					console.log(err);
					reject(err);
				}
				resolve(Posts.get(id));
			});
		});
	},
	delete: function _delete(id) {
		return new Promise(function (resolve, reject) {
			_db2.default.query('DELETE FROM Posts WHERE id = ' + id, function (err, rows) {
				if (err) {
					console.log(err);
					reject(err);
				}
				resolve(Posts.getAll());
			});
		});
	}
};