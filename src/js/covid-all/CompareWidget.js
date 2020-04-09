
import React, { useState } from 'react';
import {
    ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Loader from 'react-loader-spinner';
import Card from 'react-bootstrap/Card';
import {reactLocalStorage} from 'reactjs-localstorage';

import FetchTimeSeries from '../time-series/FetchTimeSeries';
import { useFetch } from '../useFetch';
import CountrySelector from '../CountrySelector';

import WidgetContainer from '../WidgetContainer';

const CompareWidget = props => {
    let defaultCountries = {
        'India': true, 
        'Pakistan': true, 
        'Bangladesh': true, 
        'Sri Lanka': true,
        'Malaysia': true,
        'Vietnam': true
    };
    let storedCountries = reactLocalStorage.getObject('compare_widget_country_selected');
    if (storedCountries && Object.keys(storedCountries).length > 0) {
        defaultCountries = storedCountries;
    }
    const [data, loading] = useFetch('https://pomber.github.io/covid19/timeseries.json');
    const [selectedCountries, setSelectedCountries] = useState(defaultCountries);
    
    const COLOR_ARRAY = [
        "#17A2B8",
        "#FFC107",
        "#28A745",
        "#DC3545",
        "#626567",
        "#BA4A00",
        "#0E6655",
        "#FF5833",
        "#200A3D",
        "#FFB433"
    ];

    const getCountryResolvedName = input => {
        if (input === 'USA') {
            return 'US';
        } if (input === 'UK') {
            return 'United Kingdom'
        } if (input === 'S. Korea') {
            return 'Korea, South';
        } else {
            return input;
        }
    };

    const getCountriesToCompare = () => {
        let countries = Object.keys(selectedCountries).filter(elem => {
            return selectedCountries[elem] === true;
        });

        return countries;
    }

    const getCountryFirstIndex = countryData => {
        let i = 0;
        if (countryData) {
            for(; i < countryData.length; i++) {
                if (countryData[i].confirmed > 0) {
                    break;
                }
            }
        }
        return i;
    }

    const getWeekArray = (country, timeseries) => {
        let firstIndex = getCountryFirstIndex(timeseries);
        console.log('country firstIndex', country, firstIndex);
        let wk = 1;
        let arr = [];
        for (let i = firstIndex; i < timeseries.length; i = i + 7) {
            let obj = {};
            obj['week'] = `Week ${wk}`;
            obj[country] = timeseries[i].confirmed;
            obj[`${country}-week-date`] = timeseries[i].date;
            arr.push(obj);
            wk++;
        }
        if ((((arr.length - 1) * 7) + firstIndex) < timeseries.length - 1) {
            let obj = {};
            obj['week'] = `Week ${wk}`;
            obj[country] = timeseries[timeseries.length - 1].confirmed;
            obj[`${country}-week-date`] = timeseries[timeseries.length - 1].date;
            arr.push(obj);
        }
        console.log(wk, arr);
        return arr;
    }

    const getData = () => {
        let accumulator = [];
        getCountriesToCompare().forEach(country => {
            let resolvedName = getCountryResolvedName(country);
            let timeseries = data[resolvedName];
            if (timeseries) {
                let arr = getWeekArray(country, timeseries);
                accumulator.push(arr);
            }
        });
        let concated = [];
        accumulator.forEach(item => {
            concated = concated.concat(item);
        })

        let joined = concated.reduce((acc, x) => {
            acc[x.week] = Object.assign(acc[x.week] || {}, x);
            return acc;
        }, {});

        return Object.values(joined);
    }

    let chartData = [];
    if (!loading) {
        chartData = getData();
        console.log('chartData', chartData);
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          return (
            <div className="custom-tooltip">
                <h5 className="label">Comparison at {`${payload[0].payload.week}`}</h5>
                <hr />
                {
                    getCountriesToCompare().map((entry, index) => 
                        payload[0].payload[entry] ?
                        <p key={`intro-${index}`} className="intro">
                            <span style={{color: COLOR_ARRAY[index % COLOR_ARRAY.length]}}>
                                <span style={{fontSize:'15px'}}>{entry}: {payload[0].payload[entry]}</span> {' '}
                                <span style={{fontSize:'12px'}}>(Computed on {payload[0].payload[`${entry}-week-date`]})</span>
                            </span>
                        </p> : null
                    )
                }
            </div>
          );
        }
      
        return null;
    };

    const getCountryFlagName = input => {
        if (input === 'US') {
            return 'USA';
        } if (input === 'United Kingdom') {
            return 'UK'
        } if (input === 'Korea, South') {
            return 'S. Korea';
        } else {
            return input;
        }
    };
    

    const updateCountries = countries => {
        console.log('updateCountries', countries)
        setSelectedCountries(countries);
        reactLocalStorage.setObject('compare_widget_country_selected', countries);
    }
    
    return(
         <div className="compare-widget">
            { loading ? 
                <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={100}
                    width={100}
                /> : 
                
                <Card >
                    <WidgetContainer children = {
                        <Card.Body>
                            <Card.Title>
                                Compare Countries over the Weeks
                                {   
                                    chartData.length > 0 ?
                                        <CountrySelector 
                                            preSelected={selectedCountries}
                                            update={updateCountries} /> 
                                        : null 
                                }
                            </Card.Title>
                            {
                                chartData.length > 0 ?
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Countries(<b>{getCountriesToCompare().length}</b>) :
                                        {
                                            getCountriesToCompare().map((entry, index) => 
                                                <FetchTimeSeries  key={`fts-${index}`} country={getCountryFlagName(entry)} size='16' history={props.history}/>)
                                        }
                                    </Card.Subtitle> 
                                    : null 
                            }
                            {
                                chartData.length > 0 ?
                                    <ResponsiveContainer width='100%' height={400}>
                                        <LineChart data={chartData}
                                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                            <XAxis dataKey="week" />
                                            <YAxis />
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Legend />
                                            {
                                                getCountriesToCompare().map((entry, index) => 
                                                    <Line key={`line-${index}`} type="monotone" dataKey={entry} stroke={COLOR_ARRAY[index % COLOR_ARRAY.length]} activeDot={{ r: 8 }} />)
                                            }
                                        </LineChart>
                                    </ResponsiveContainer> : 
                                    <h3>
                                        Select One or more countries to compare
                                        <CountrySelector 
                                            preSelected={selectedCountries}
                                            update={updateCountries} />
                                    </h3>
                            }
                        </Card.Body>
                    }/>
                </Card>
                
            }
        </div>
    )
};

export default CompareWidget;