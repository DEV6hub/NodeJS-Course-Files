import React, { Component, Fragment } from 'react';
import Posts from './Posts';
import axios from 'axios';
import CreatePost from './Create_Post';
import Typography from '@material-ui/core/Typography';
import Error from '@material-ui/icons/Error';
import indigo from '@material-ui/core/colors/indigo';

class Feed extends Component {

	constructor(props) {
		super(props);
		this.state = { feed: [], loadingFeed: true };
	}

	componentDidMount() {
		axios.get('http://localhost:4000/feed')
			.then(res => this.setState({ feed: res.data.data.feed }))
			.catch(err => console.log(err))
			.finally(() => this.setState({ loadingFeed: false }));
	}

	updatePosts = (feed) => {
		this.setState({ feed });
	};

	renderPosts = (feeds) =>
		feeds.map(feed => <Posts key={feed.post.id} feed={feed} />);

	render() {
		return (
			<Fragment>
				<CreatePost updatePosts={feed => this.updatePosts(feed)}/>
				<div style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '20px'}}>
					{this.state.loadingFeed
						? <Typography variant="headline">Loading posts...</Typography>
						: this.state.feed.length
							? this.renderPosts(this.state.feed)
							: <Typography variant="headline">
								<Error style={{ position: 'relative', top: '3px' }} nativeColor={indigo[500]}/>
								&nbsp;&nbsp;No Posts Yet.
							</Typography>}
				</div>
			</Fragment>
		);
	}
}

export default Feed;