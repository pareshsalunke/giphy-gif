/**
 * Created by ParryPC on 11/2/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SearchBar from '../components/SearchBar';

// CSS
import '../styles/app.css';

class App extends Component {
	render() {
		return (
			<div>
				<SearchBar onTermChange={ this.props.actions.requestGifs } />
			</div>
		);
	}
}

function mapStateToProps({gifs}) {
	return {
		gifs
	};
}

function mapDispatchToProps(dispatch) {

	return {
		actions: bindActionCreators(Actions,dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);