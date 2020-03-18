
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import allReducers from '../reducers';

const store = createStore( allReducers, applyMiddleware(thunk) );

export default store;