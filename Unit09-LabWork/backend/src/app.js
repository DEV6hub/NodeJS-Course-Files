import http from 'http';
import express from 'express';
import logger from 'morgan';
import postsRouter from './routes/posts';
import commentsRouter from './routes/comments';
import likeRouter from './routes/like';
import bodyParser from 'body-parser';
import db from './util/db';

const app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

app.use(logger('dev'));

app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/like', likeRouter);

// Connect to MySQL on start
db.connect(function(err) {
	if (err) {
		console.log('Unable to connect to MySQL.\n'+err);
		process.exit(1)
	} else {
		http.createServer(app).listen(4000, function() {
			console.log('Express server started on port 4000...')
		})
	}
});