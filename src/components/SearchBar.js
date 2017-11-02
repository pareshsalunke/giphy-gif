/**
 * Created by ParryPC on 10/31/17.
 */
import React, { Component } from 'react';

class SearchBar extends Component {

	constructor() {
		super();
		this.state={ term: '' }
	}

	onInputTermChange(e, term) {
		this.setState({term});

		if (e.key === 'Enter') {
			this.props.onTermChange(term);
		}
	}

	render() {
		return (
			<div className="search">
				<input placeholder="Enter text to search for gifs!" onKeyPress={event => this.onInputTermChange(event, event.target.value)}/>
			</div>
		);
	}
}

export default SearchBar;