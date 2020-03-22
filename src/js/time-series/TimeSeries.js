
import React from "react";
import { useFetch } from '../useFetch';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Loader from 'react-loader-spinner';
import Card from 'react-bootstrap/Card';

import TimeSeriesBroken from './TimeSeriesBroken';

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
    let brokenDownData = [];
    if (!loading) {
        // console.log('timeseries', data);
        // console.log('country', country);
        const availableData = data[getProposedName(country)];
        if (availableData) {
            refinedData = data[getProposedName(country)];
        }
        // console.log('refined timeseries', refinedData);

        for (let i = 0; i<refinedData.length ; i++) {
            let obj = {};
            obj['date'] = refinedData[i]['date'];
            if (i === 0) {
              obj['confirmed'] = refinedData[i]['confirmed'];
              obj['deaths'] = refinedData[i]['deaths'];
              obj['recovered'] = refinedData[i]['recovered'];
            } else {
              obj['confirmed'] = refinedData[i]['confirmed'] - refinedData[i-1]['confirmed'];
              obj['deaths'] = refinedData[i]['deaths'] - refinedData[i - 1]['deaths'];
              obj['recovered'] = refinedData[i]['recovered'] - refinedData[i-1]['recovered'];
          
            }
            brokenDownData.push(obj);
          }
          // console.log('refined brokenDownData', brokenDownData);
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
                        <div>
                            <TimeSeriesBroken data={brokenDownData} />
                            <div className="chart">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Trends - Change of Confirmed vs Recovered vs Deaths</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Total count at the daily basis</Card.Subtitle>
                                    
                                        <LineChart width={920} height={400} data={refinedData}
                                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                            <XAxis dataKey="date" />
                                            <YAxis />
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="confirmed" stroke="#FFC107" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="recovered" stroke="#28A745" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="deaths" stroke="#DC3545" activeDot={{ r: 8 }} />
                                        </LineChart>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
            }
            
        </div>
    )
};

export default TimeSeries;