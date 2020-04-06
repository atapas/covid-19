
import React from "react";
import Button from 'react-bootstrap/Button';


import COUNTRY_CODES from '../utils/country_code';

const FetchTimeSeries = props => {
    const country = props.country;
    const size = props.size ? props.size : 48;
    
    let selectedCountry = [];
    let image = '';
    
    // console.log('COUNTRY_CODES', COUNTRY_CODES);
    
    selectedCountry = COUNTRY_CODES.filter( elem => {
        return elem.name === country;
    });
    // console.log('selectedCountry', selectedCountry);
    if (selectedCountry.length > 0) {
        let countryCode = selectedCountry[0]['alpha2code'];
        image =  <img src={`https://www.countryflags.io/${countryCode}/flat/${size}.png`} alt={country} />
    }

    const getCountryDetails = (event, country) => {
        event.preventDefault();
        if (props.history) {
            props.history.push(`/country-details?name=${country}`);
        }
    }
    
    return(
        
            <Button 
                variant="light" 
                size="sm"
                className="countryCapsules"
                onClick={event => getCountryDetails(event, country)}
                active>
                    <div className="imageCountry">
                        { image }
                        <span>{ country }</span>
                    </div>
            </Button>
        
    );
};

export default FetchTimeSeries;