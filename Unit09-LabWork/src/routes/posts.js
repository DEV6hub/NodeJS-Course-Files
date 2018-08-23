import express from 'express';
import response from '../util/response';
import {Posts} from '../util/db_helpers';
const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
	Posts.getAll()
		.then(posts => response(res, {posts}, 200, 'All Posts'))
		.catch(err => response(res, {}, 500, 'Failed to get all posts'));
});

postsRouter.get('/:id', (req, res) => {
	Posts.get(req.params.id)
		.then(post => response(res, {post}, 200, `Retrieved Post number ${req.params.id}`))
		.catch(err => response(res, {}, 500, 'Failed to get post'));
});

postsRouter.post('/', (req, res) => {
	Posts.create(req.body)
		.then(posts => response(res, {posts}, 200, `Successfully created new post.`))
		.catch(err => response(res, {}, 500, 'Failed to get create post'));
});

postsRouter.put('/:id', (req, res) => {
	Posts.update(req.params.id, req.body)
		.then(updatedPost => response(res, {post: updatedPost}, 200, 'Successfully updated the post'))
		.catch(err => response(res, {}, 500, 'Failed to update the post.'))
});

postsRouter.delete('/:id', (req, res) => {
	Posts.delete(req.params.id)
		.then(posts => response(res, {posts}, 200, 'Successfully deleted the post'))
		.catch(err => response(res, {}, 500, 'Failed to delete the post'));
});

export default postsRouter;