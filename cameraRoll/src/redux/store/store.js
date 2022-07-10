import {createStore,combineReducers,applyMiddleware} from 'redux';
import {reducerFunction} from '../reducer/dataReducer';
import thunk from 'redux-thunk';
const mainReducer=combineReducers({datas:reducerFunction});

const store=createStore(mainReducer,applyMiddleware(thunk));

export {store}