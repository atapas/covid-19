import timeseriesReducer from './timeseriesReducer';
import covid19Reducer from './covid19Reducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    covid19: covid19Reducer,
    timeseries: timeseriesReducer
});

export default allReducers;