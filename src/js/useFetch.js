import React, {useState, useEffect} from 'react';
/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

const useFetch = (inputURL) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState(inputURL);

    async function fetchURL() {
        // console.log('fetchURL');
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        fetchURL();
    }, [url]);

    return [ data, loading ];
};

export { useFetch };