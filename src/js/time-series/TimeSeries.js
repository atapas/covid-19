
import React from "react";
import { useFetch } from '../useFetch';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Loader from 'react-loader-spinner';

const TimeSeries = props => {
    const [data, loading] = useFetch('https://pomber.github.io/covid19/timeseries.json');
    const country = props.country;

    const getProposedName = country => {
        if (country === 'S. Korea') {
            return 'Korea, South';
        } else if (country === 'UK') {
            return 'United Kingdom';
        } else {
            return country;
        }
    }
    let refinedData = [];
    if (!loading) {
        console.log('timeseries', data);
        console.log('country', country);
        const availableData = data[getProposedName(country)];
        if (availableData) {
            refinedData = data[getProposedName(country)];
        }
        console.log('refined timeseries', refinedData);
    }

    return (
        <div className="timeseries">
            {
                loading ? 
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    /> :
                    refinedData.length === 0 ? 
                        <h3>No time-series data available for this country</h3> :
                        <div className="chart">
                            <h2>Trends</h2>
                            <LineChart width={900} height={400} data={refinedData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="confirmed" stroke="#FFC107" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="recovered" stroke="#28A745" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="deaths" stroke="#DC3545" activeDot={{ r: 8 }} />
                            </LineChart>
                        </div>
            }
            
        </div>
    )
};

export default TimeSeries;