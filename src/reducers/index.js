/**
 * Created by ParryPC on 11/2/17.
 */
import { combineReducers } from 'redux';
import GifsReducers from './reducer_gifs';

const rootReducer = combineReducers({
	gifs: GifsReducers
});

export default rootReducer;