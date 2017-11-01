// eslint-disable-next-line
"use strict";

//Library Imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Custom File imports
import SearchBar from './components/SearchBar';

class App extends Component {

	render() {
		return (
			<div className="greeting">
				<SearchBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
