import express from 'express';
import response from '../util/response';

const postsRouter = express.Router();

postsRouter.get('/', (req, res) => {
	res.json(response({posts: []}, 200, 'All the Posts'));
});

postsRouter.get('/:id', (req, res) => {
	res.json(response({posts: {}}, 200, `Retrieved Post No. ${req.params.id}`));
});

postsRouter.put('/:id', (req, res) => {
	res.json(response({posts: {}}, 200, `Updated Post No. ${req.params.id}`));
});

postsRouter.delete('/:id', (req, res) => {
	res.json(response({posts: {}}, 200, `Deleted Post No. ${req.params.id}`));
});

postsRouter.delete('/', (req, res) => {
	res.json(response({posts: {}}, 200, `Deleted all posts`));
});

export default postsRouter;