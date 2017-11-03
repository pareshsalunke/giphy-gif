/**
 * Created by ParryPC on 11/2/17.
 */
import React from 'react';

const GifsTemp = ({gifs}) => {

	const gifItems = gifs.map((gif) => {
		return (
			<li key = {gif.id}><img url={gif.url} /></li>
		);
	});

	return (
		<ul className="gif-list">{gifItems}</ul>
	);
};

export default GifsTemp;