
import React, { useState, useEffect } from 'react';
import COUNTRY_CODES from './utils/country_code';;

const Country = props => {
    console.log(props);
    const countryName = new URLSearchParams(props.location.search).get('name');

    const getCountryCode = country => {
        let selectedCountry = COUNTRY_CODES.filter( elem => {
            return elem.name === country;
        });
        // console.log('selectedCountry', selectedCountry);
        let countryCode = '';
        if (selectedCountry.length > 0) {
            countryCode = selectedCountry[0]['alpha2code'];
        }
        return countryCode;
    }
    return(
        <h1><img src={`https://www.countryflags.io/${getCountryCode(countryName)}/flat/64.png`} alt={countryName} />{countryName}</h1>
    )
};

export default Country;