/**
 * Created by ParryPC on 10/31/17.
 */
import React, { Component } from 'react';

class SearchBar extends Component {

	constructor() {
		super();
		this.state={ term: '' }
	}

	onInputTermChange(term) {
		this.setState({term});
		this.props.onTermChange(term);
	}

	render() {
		return (
			<div className="search">
				<input onChange={event => this.onInputTermChange(event.target.value)}/>
			</div>
		);
	}
}

export default SearchBar;