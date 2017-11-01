/**
 * Created by ParryPC on 11/1/17.
 */

import React from 'react';

const GifItem = (image) => {
	return (
		<li>
			<img alt="whatever for now. change to api text" src={image.gif.url} />
		</li>
	);
};

export default GifItem;

