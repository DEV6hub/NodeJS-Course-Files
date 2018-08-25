import React, { Fragment } from 'react';
import ContentMedia from 'ContentMedia';
import Like from 'Like';
import Comments from 'Comments';

const Posts = (props) => (
	<Fragment>
		<ContentMedia text={props.post.text} imageUrl={props.posts.imageUrl}/>
		<Like liked={props.post.liked}/>
		<Comments comments={props.post.comments}/>
	</Fragment>
);

export default Posts;
