
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { thunk_timeseries_action_creator } from './../actions/timeseriesAction';
import TimeSeries from "./TimeSeries";

import * as country_code from '../../../assets/data/coutry_code.json';

const FetchTimeSeries = props => {
    //const timeseries = useSelector ( state => state.timeseries );
    //const dispatch = useDispatch();
    
    /*const handleClick = e => {
        e.preventDefault();
        dispatch(thunk_timeseries_action_creator());
    };*/
   
    const country = props.country;
    
    let selectedCountry = [];
    let image = '';
    // console.log(countriesData);
    selectedCountry = country_code.filter( elem => {
        return elem.name === country;
    });
    // console.log('selectedCountry', selectedCountry);
    if (selectedCountry.length > 0) {
        let countryCode = selectedCountry[0]['alpha2code'];
        image =  <img src={`https://www.countryflags.io/${countryCode}/flat/48.png`} alt={country} />
    }
    
    return(
        
            <Button 
            variant="light" 
            size="sm"
            className="countryCapsules"
            active>
                <div className="imageCountry">
                    { image }
                    <span>{ country }</span>
                </div>
            </Button>
        
    );
};

export default FetchTimeSeries;