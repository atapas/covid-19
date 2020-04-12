/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import timeseriesReducer from './timeseriesReducer';
import covid19Reducer from './covid19Reducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    covid19: covid19Reducer,
    timeseries: timeseriesReducer
});

export default allReducers;