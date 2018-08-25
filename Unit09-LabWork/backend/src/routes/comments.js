import express from 'express';
import response from "../util/response";
import { Comments } from "../util/db_helpers";

const commentsRouter = express.Router();

commentsRouter.get('/:post_id', (req, res) => {
	Comments.getAll(req.params.post_id)
		.then(comments => response(res, { comments }, 200, `Successfully fetched comments.`))
		.catch(err => response(res, {}, 500, `Failed to get comments for Post No. ${req.params.post_id}`));
});

commentsRouter.post('/:post_id/:person_id', (req, res) => {
	Comments.create(req.params.post_id, req.params.person_id)
		.then(comments => response(res, { comments }, 200, 'Successfully created comment'))
		.catch(err => response(res, {}, 500, 'Failed to create comment.'))
});

commentsRouter.put('/:comment_id/:post_id', (req, res) => {
	res.json(response({comments: {}}, 200, `Updated Comment No. ${req.params.comment_id} for Post No. ${req.params.post_id}`));
});

commentsRouter.delete('/:comment_id', (req, res) => {
	res.json(response({comments: []}, 200, `Deleted Comment No. ${req.params.comment_id}`));
});

export default commentsRouter;