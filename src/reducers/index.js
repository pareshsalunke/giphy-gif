/**
 * Created by ParryPC on 11/2/17.
 */
import { combineReducers } from 'redux';
import GifsReducers from './reducer_gifs';
import ModalReducers from './reducer_modal';

const rootReducer = combineReducers({
	gifs: GifsReducers,
	trendingGifs: GifsReducers,
	modal: ModalReducers
});

export default rootReducer;