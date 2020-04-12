/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

export const registerCovid19Data = covidData => {
    return {
        type: 'REGISTER_COVID_19_DATA',
        payload: covidData
    }
};

export const registerCovidTSData = covidTSData => {
    return {
        type: 'REGISTER_COVID_TS_DATA',
        payload: covidTSData
    }
};