/**
 * Created by ParryPC on 11/1/17.
 */

import React from 'react';
import GifItem from './GifItem';

const GifList = (props) => {
	const gifItems = props.gifs.map((image) => {
		return <GifItem key={image.id} gif={image} />
	});

	return (
		<ul>{gifItems}</ul>
	);
};

export default GifList;