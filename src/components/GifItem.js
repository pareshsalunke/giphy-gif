/**
 * Created by ParryPC on 11/1/17.
 */

import React from 'react';

const GifItem = (image) => {
	return (
		<div className="gif-item">
			<img alt="There is supposed to be a Gif here. Wondering!!" src={image.gif.images.fixed_height.url} />
		</div>
	);
};

export default GifItem;

