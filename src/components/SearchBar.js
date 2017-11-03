/**
 * Created by ParryPC on 10/31/17.
 */
import React, { Component } from 'react';

class SearchBar extends Component {
	onInputTermChange(e) {
		if (e.key === 'Enter') {
			this.props.onTermChange(e.target.value);
		}
	}

	render() {
		return (
			<div className="search">
				<input placeholder="Enter text to search for gifs!" onKeyPress={event => this.onInputTermChange(event)}/>
			</div>
		);
	}
}

export default SearchBar;