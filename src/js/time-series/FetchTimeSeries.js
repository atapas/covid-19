
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';

import { thunk_timeseries_action_creator } from './../actions/timeseriesAction';
import * as country_code from '../../../assets/data/coutry_code.json';
import TimeSeries from "./TimeSeries";

const FetchTimeSeries = props => {
    const timeseries = useSelector ( state => state.timeseries );
    const dispatch = useDispatch();
    const handleClick = e => {
        e.preventDefault();
        dispatch(thunk_timeseries_action_creator());
    };

    const cuntry_code_data = country_code.data;
    const country = props.country;
    
    return(
        <React.Fragment>
            <Button 
                variant="secondary" 
                size="sm" 
                onClick={event => handleClick(event)} active>
                    <img src={`https://www.countryflags.io/${cuntry_code_data[country]}/flat/32.png`} alt="cc" />
                    <span>{ country }</span>
            </Button>
           
            {timeseries.isFetching ? <h3>Loading...</h3> : null}
            {timeseries.isError ? (
                <h3 className="error">No data.</h3>) : null}
            {Object.keys(timeseries.timeseriesData).length > 0 ? (
                <TimeSeries timeseries={timeseries.timeseriesData[country]} />
            ) : null}
        </React.Fragment>
    );
};

export default FetchTimeSeries;