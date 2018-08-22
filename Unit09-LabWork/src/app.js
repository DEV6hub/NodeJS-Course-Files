import http from 'http';
import express from 'express';
import logger from 'morgan';
import postsRouter from './routes/posts';
import commentsRouter from './routes/comments';
import likeRouter from './routes/like';

const app = express();

app.use(logger('dev'));

app.use('/posts', postsRouter);

app.use('/comments', commentsRouter);
app.use('/like', likeRouter);


http.createServer(app).listen(3000);

console.log('Express server start on port 3000');