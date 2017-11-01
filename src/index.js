// eslint-disable-next-line
"use strict";

//Library Imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import request from 'superagent';

//Custom File imports
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';

const API_KEY = "dJkVfg0pxoWLpo6Dh6HUY5fcifL6JJoU";

class App extends Component {
	constructor() {
		super();

		this.state = {
			gifs: []
		}
	}

	handleTermChange(term) {
		const ROOT_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${term}&limit=25&offset=0&rating=G&lang=en`;

		request.get(ROOT_URL, function(err,res) {
			console.log(res.body.data[0]);
		});
	}

	render() {
		return (
			<div>
				<SearchBar onTermChange={this.handleTermChange} />
				<GifList gifs = {this.state.gifs} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
