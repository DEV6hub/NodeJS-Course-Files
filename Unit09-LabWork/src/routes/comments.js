import express from 'express';
import response from "../util/response";

const commentsRouter = express.Router();

commentsRouter.get('/:post_id', (req, res) => {
	res.json(response({comments: []}, 200, `All the comments for post ${req.params.post_id}`));
});

commentsRouter.put('/:comment_id/:post_id', (req, res) => {
	res.json(response({comments: {}}, 200, `Updated Comment No. ${req.params.comment_id} for Post No. ${req.params.post_id}`));
});

commentsRouter.delete('/:comment_id', (req, res) => {
	res.json(response({comments: []}, 200, `Deleted Comment No. ${req.params.comment_id}`));
});

export default commentsRouter;