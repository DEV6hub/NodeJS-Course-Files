import db from './db';

export const Posts = {
	getAll: () => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM Posts', (err, rows) => {
				if(err) {
					console.log('Get all posts', err);
					reject(err);
				}
				console.log('Get all posts', rows);
				resolve(rows);
			});
		});
	},
	get: (id) => {
		return new Promise((resolve, reject) => {
			db.query(`SELECT * FROM Posts WHERE id = ${id}`, (err, rows) => {
				if(err) {
					reject(err);
				}
				resolve(rows[0]);
			});
		});
	},
	create: (post) => {
		return new Promise((resolve, reject) => {
			db.query(`INSERT INTO Posts SET ?`, post, (err, rows) => {
				if(err) {
					console.log(err);
					reject(err);
				}
				resolve(Posts.getAll());
			});
		});
	},
	update: (id, post) => {
		return new Promise((resolve, reject) => {
			db.query(`UPDATE Posts SET ? WHERE id = ?`,[post,id], (err, rows) => {
				if(err) {
					console.log(err);
					reject(err);
				}
				resolve(Posts.get(id));
			});
		});


	},
	delete: (id) => {
		return new Promise((resolve, reject) => {
			db.query(`DELETE FROM Posts WHERE id = ${id}`, (err, rows) => {
				if(err) {
					console.log(err);
					reject(err);
				}
				resolve(Posts.getAll());
			})
		});
	}
};

export const Comments = {
	getAll: (post_id) => {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM Comments where post_id = ?', post_id, (err, rows) => {
				if(err) {
					reject(err);
				}
				resolve(rows);
			});
		});
	},
	create: (post_id, person_id) => {
		return new Promise((resolve, reject) => {
			db.query(`INSERT INTO Comments SET ?`, { post_id, person_id }, (err, rows) => {
				if(err) {
					console.log(err);
					reject(err);
				}
				resolve(Comments.getAll());
			});
		});
	},
	update: (id) => {
		return new Promise((resolve, reject) => {
			db.query(`UPDATE Posts SET ? WHERE id = ?`,[post,id], (err, rows) => {
				if(err) {
					console.log(err);
					reject(err);
				}
				resolve(Posts.get(id));
			});
		});
	},
	delete: (id) => {
		return new Promise((resolve, reject) => {
			db.query(`DELETE FROM Posts WHERE id = ${id}`, (err, rows) => {
				if(err) {
					console.log(err);
					reject(err);
				}
				resolve(Posts.getAll());
			})
		});
	}
};