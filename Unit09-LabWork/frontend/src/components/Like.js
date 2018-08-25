import React, { Fragment } from 'react';

const LikedPanel = () => {};

const UnlikedPanel = () => {};

const Like = (props) => (
	<Fragment>
		{ props.liked ? <LikedPanel/> : <UnlikedPanel/> }
	</Fragment>
);

export default Like;