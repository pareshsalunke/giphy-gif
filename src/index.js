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
import GifModal from './components/GifModal';
import './styles/app.css';

const API_KEY = "dJkVfg0pxoWLpo6Dh6HUY5fcifL6JJoU";

class App extends Component {
	constructor() {
		super();

		this.state = {
			gifs: [],
			selectedGif: null,
			modalIsOpen: false

		};

		this.handleTermChange = this.handleTermChange.bind(this);
	}

	openModal(gif) {
		this.setState({
			modalIsOpen: true,
			selectedGif: gif
		});
	}

	closeModal() {
		this.setState({
			modalIsOpen: false,
			selectedGif: null
		})
	}

	handleTermChange(term) {
		const ROOT_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${term.replace(/\s/g, '+')}&limit=25&offset=0&rating=G&lang=en`;

		request.get(ROOT_URL, (err, res) => {
			console.info(res.body.data[0]);
			this.setState({ gifs: res.body.data })
		});
	}

	render() {
		return (
			<div>
				<SearchBar onTermChange={term => this.handleTermChange(term)} />
				<GifList gifs = {this.state.gifs} />
				<GifModal   modalIsOpen={this.state.modalIsOpen}
							selectedGif={this.state.selectedGif}
							onRequestClose = {() => this.closeModal()} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
