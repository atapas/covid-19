/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import store from '../store';

export const fetch_timeseries = () => {
    return {
        type: 'FETCH_TIMESERIES'
    };
};

export const recieve_timeseries = timeseries => {
    return {
        type: 'FETCHED_TIMESERIES',
        data: timeseries
    };
};

export const recieve_error = () => {
    return {
        type: 'RECIEVED_ERROR'
    };
};

export const thunk_timeseries_action_creator = () => {
    store.dispatch(fetch_timeseries());
    return function ( dispatch, getState ) {
        return fetch ( 'https://pomber.github.io/covid19/timeseries.json' )
            .then ( data => data.json() )
            .then ( data => {
                dispatch ( recieve_timeseries(data) );
            })
            .catch ( err => dispatch ( recieve_error() ));
    };
};

