import timeseriesReducer from './timeseriesReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    timeseries: timeseriesReducer
});

export default allReducers;