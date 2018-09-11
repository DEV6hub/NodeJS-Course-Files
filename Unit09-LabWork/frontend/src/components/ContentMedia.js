import React from 'react';
import styled from 'styled-components';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const Panel = styled.div`
	margin: 5px;
`;

const ContentMedia = (props) => (
	<Panel>
		<div style={{ margin: 10 }}>
			<Typography style={{ fontSize: 18 }}>{props.post.text}</Typography>
			<Typography style={{ fontSize: 10, color: "#A9A9A9", marginBottom: 5 }}>
				{moment(props.post.created_at).fromNow()}
			</Typography>
		</div>
		{props.post.image_url &&
		<CardMedia style={{ margin: '-5px', height: 0, paddingTop: '56.25%' }} image={props.post.image_url} title="Media"/>
		}
	</Panel>
);

export default ContentMedia;
