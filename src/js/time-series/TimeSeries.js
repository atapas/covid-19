
import React from "react";
import { useFetch } from '../useFetch';
import {
    ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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
        const availableData = data[getProposedName(country)];
        if (availableData) {
            refinedData = availableData.map(elem => {
                elem['active'] = (elem['confirmed'] - (elem['deaths'] + elem['recovered']));
                return elem;
            });
        }
        

        for (let i = 0; i<refinedData.length ; i++) {
            let obj = {};
            obj['date'] = refinedData[i]['date'];
            if (i === 0) {
                obj['confirmed'] = refinedData[i]['confirmed'];
                obj['deaths'] = refinedData[i]['deaths'];
                obj['recovered'] = refinedData[i]['recovered'];
            } else {
                let confirmedDiff = refinedData[i]['confirmed'] - refinedData[i-1]['confirmed'];
                let deathDiff = refinedData[i]['deaths'] - refinedData[i - 1]['deaths'];
                let recoverdDiff = refinedData[i]['recovered'] - refinedData[i-1]['recovered'];
                obj['confirmed'] = confirmedDiff < 0 ? 0 : confirmedDiff;
                obj['deaths'] = deathDiff < 0 ? 0 : deathDiff;
                obj['recovered'] = recoverdDiff < 0 ? 0 : recoverdDiff;
            }
            let activeDiff = obj['confirmed'] - (obj['deaths'] + obj['recovered']);
            obj['active'] = activeDiff < 0 ? 0 : activeDiff;
            brokenDownData.push(obj);
          }
    }

    console.group('TimeSeries');
    console.groupCollapsed();
    console.log('timeseries', data);
    console.log('country', country);
    console.log('refined timeseries', refinedData);
    console.log('refined brokenDownData', brokenDownData);
    console.groupEnd();

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
                                        <ResponsiveContainer width='100%' height={400}>
                                            <LineChart data={refinedData}
                                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                                <XAxis dataKey="date" />
                                                <YAxis />
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <Tooltip />
                                                <Legend />
                                                <Line type="monotone" dataKey="confirmed" stroke="#FFC107" activeDot={{ r: 8 }} />
                                                <Line type="monotone" dataKey="active" stroke="#B96666" activeDot={{ r: 8 }} />
                                                <Line type="monotone" dataKey="recovered" stroke="#28A745" activeDot={{ r: 8 }} />
                                                <Line type="monotone" dataKey="deaths" stroke="#DC3545" activeDot={{ r: 8 }} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
            }
            
        </div>
    )
};

export default TimeSeries;