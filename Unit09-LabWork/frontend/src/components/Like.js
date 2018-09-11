import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import LikeIcon from '@material-ui/icons/ThumbUp'
import indigo from '@material-ui/core/colors/indigo';
import openSocket from "socket.io-client";
const socket = openSocket('http://localhost:8000');

const Panel = styled.div`
	cursor: pointer;
	display: inline-block;
	padding: 0px 10px;
	margin: 0 0 -20px 0;
`;

const LikeText = styled.p`
	position: relative;
	display: inline-block;
	top: -5px;
	left: 10px;
`;

const LikedText = LikeText.extend`
	color: ${indigo[500]};
`;


const LikedPanel = ({posts_id, person_id, toggleLikePost}) => (
	<Panel onClick={() => toggleLikePost(posts_id, person_id)}>
		<LikeIcon nativeColor={indigo[500]}/>
		<LikedText>Like</LikedText>
	</Panel>
);

const UnlikedPanel = ({posts_id, person_id, toggleLikePost }) => (
	<Panel onClick={() => toggleLikePost(posts_id, person_id)}>
		<LikeIcon/>
		<LikeText>Like</LikeText>
	</Panel>
);


class Like extends Component {

	constructor(props) {
		super(props);
		this.state = { liked: props.liked };
		socket.on('likeToggled', (res) => {
			console.log(res);
			this.setState({ liked: res.liked });
		});
	}

	toggleLikePost = (posts_id, person_id) => {
		socket.emit('click_like', { posts_id, person_id });
	};

	render() {

		const { posts_id, person_id } = this.props;
		return (
			<Fragment>
				{
					this.state.liked
						?
						<LikedPanel
							posts_id={posts_id}
							person_id={person_id}
							toggleLikePost={this.toggleLikePost}
						/>
						:
						<UnlikedPanel
							posts_id={posts_id}
							person_id={person_id}
							toggleLikePost={this.toggleLikePost}
						/>
				}
				<hr/>
			</Fragment>

		)
	}
}

export default Like;