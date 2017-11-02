/**
 * Created by ParryPC on 11/1/17.
 */

import React from 'react';

const GifItem = ({gif, onGifSelect}) => {
	return (
		<div className="gif-item" onClick={() => onGifSelect(gif)}>
			<img alt="There is supposed to be a Gif here. Wondering!!" src={gif.images.fixed_height.url} />
		</div>
	);
};

export default GifItem;

