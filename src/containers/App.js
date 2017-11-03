/**
 * Created by ParryPC on 11/2/17.
 */
import React, { Component } from 'react';
import GifsTemp from '../components/GifsTemp';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<div>
				<GifsTemp gifs = { this.props.gifs } />
			</div>
		);
	}
}

function mapStateToProps({gifs}) {
	return {
		gifs
	};
}

export default connect(mapStateToProps)(App);