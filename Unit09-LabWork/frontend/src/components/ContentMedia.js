import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete'
import red from '@material-ui/core/colors/red';

const Panel = styled.div`
	margin: 5px;
`;

const Delete = styled(DeleteIcon)`
	position: relative;
	cursor: pointer;
	right: 15px;
	top: 9px;
	float:right;
`;

const ContentMedia = ({ post, deletePost }) => (
	<Panel>
		<Grid container style={{ margin: 10 }}>
			<Grid item xs={10} sm={10} md={10}>
				<Typography style={{ fontSize: 18 }}>{post.text}</Typography>
				<Typography style={{ fontSize: 10, color: "#A9A9A9", marginBottom: 5 }}>
					{moment(post.created_at).fromNow()}
				</Typography>
			</Grid>
			<Grid item xs={2} sm={2} md={2}>
				<Delete nativeColor={red[600]} onClick={() => deletePost(post.id)}/>
			</Grid>
		</Grid>
		{post.image_url &&
		<CardMedia style={{ margin: '-5px', height: 0, paddingTop: '56.25%' }} image={post.image_url} title="Media"/>
		}
	</Panel>
);

export default ContentMedia;
