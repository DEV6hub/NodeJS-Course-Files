import React, { Component, Fragment } from 'react';
import Posts from 'Posts';
import axios from 'axios';

class Feed extends Component {

	constructor(props) {
		super(props);
		this.state = { posts: [] };
	}

	componentDidMount() {
		axios.post('http://localhost:4000/posts')
			.then(data => {
				this.setState({ posts: data.posts });
				console.log('Data ', data)
			})
			.catch(err => console.log(err));
	}

	render() {
		const renderPosts = () => {
			this.state.posts.map(post => <Posts key={post.id} post={post} />)
		};

		return (
			<Fragment>
				{ renderPosts(this.state.posts) }
			</Fragment>
		);
	}
}

export default Feed;