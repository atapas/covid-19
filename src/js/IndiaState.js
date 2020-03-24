
import React from 'react';
import { useFetch } from './useFetch';

const IndiaState = () => {
    const [data, loading] = useFetch('https://api.covid19india.org/data.json');

    if (!loading) {
        console.log('State data', data);
    }
    return(
        <span></span>
    )
};

export default IndiaState;