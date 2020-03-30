
import React from "react";
import { useFetch } from '../useFetch';
import {
    ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Loader from 'react-loader-spinner';
import Card from 'react-bootstrap/Card';

import TimeSeriesBroken from './TimeSeriesBroken';
import TimeSeriesPercentage from './TimeSeriesPercentage';

const TimeSeries = props => {
    const [data, loading] = useFetch('https://pomber.github.io/covid19/timeseries.json');
    const country = props.country;
    const indiaData = props.indiaData;

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
    let percentageData = [];

    if (country === 'India') {
        refinedData = indiaData.cases_time_series.map(elem => {
            if (elem.totalconfirmed !== '') {
                elem['confirmed'] = parseInt(elem.totalconfirmed, 10);
            }
            if (elem.totaldeceased !== '') {
                elem['deaths'] = parseInt(elem.totaldeceased, 10);
            }
            if (elem.totalrecovered !== '') {
                elem['recovered'] = parseInt(elem.totalrecovered, 10);
            }
            
            if (elem.totalconfirmed !== '' 
                && elem.totaldeceased !== '' 
                && elem.totalrecovered !== '') {
                    elem['active'] = (elem['confirmed'] - (elem['recovered'] + elem['deaths']));
                }
            return elem;
        });
        for (let i = 0; i<refinedData.length ; i++) {
            let obj = {};
            let percentageObj = {};
            obj['date'] = refinedData[i]['date'];
            percentageObj['date'] = refinedData[i]['date'];

            obj['confirmed'] = parseInt(refinedData[i]['dailyconfirmed'], 10);
            obj['deaths'] = parseInt(refinedData[i]['dailydeceased'], 10);
            obj['recovered'] = parseInt(refinedData[i]['dailyrecovered'], 10);
            obj['active'] = (obj['confirmed'] - (obj['recovered'] + obj['deaths']));

            if (i > 0) {
                percentageObj['% Change'] = refinedData[i-1]['confirmed'] === 0 ? 0 : 
                                                    ((parseInt(refinedData[i]['dailyconfirmed'], 10) * 100) / refinedData[i-1]['confirmed']).toFixed(2);
                percentageObj['Actual Change'] = parseInt(refinedData[i]['dailyconfirmed'], 10);
                percentageObj['Actial value'] = refinedData[i]['confirmed'];
            }

            brokenDownData.push(obj);
            percentageData.push(percentageObj);
        }
        
        
        // percentageData.push(percentageObj);
    } else {
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
                let percentageObj = {};
                obj['date'] = refinedData[i]['date'];
                percentageObj['date'] = refinedData[i]['date'];
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
    
                    percentageObj['% Change'] = refinedData[i-1]['confirmed'] === 0 ? 0 : 
                                                    ((confirmedDiff * 100) / refinedData[i-1]['confirmed']).toFixed(2);
                    percentageObj['Actual Change'] = confirmedDiff;
                    percentageObj['Actial value'] = refinedData[i]['confirmed'];
                }
                let activeDiff = obj['confirmed'] - (obj['deaths'] + obj['recovered']);
                obj['active'] = activeDiff < 0 ? 0 : activeDiff;
                brokenDownData.push(obj);
                percentageData.push(percentageObj);
              }
        }
    }

    console.group('TimeSeries');
    console.groupCollapsed();
    console.log('timeseries', data);
    console.log('country', country);
    console.log('refined timeseries', refinedData);
    console.log('refined brokenDownData', brokenDownData);
    console.log('refined percentageData', percentageData);
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
                            <TimeSeriesPercentage data={percentageData}/>
                            <div className="chart">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Trends - Change of Confirmed vs Active vs Recovered vs Deaths</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Total count at the daily basis</Card.Subtitle>
                                        <ResponsiveContainer width='100%' height={400}>
                                            <LineChart data={refinedData}
                                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                                <XAxis dataKey="date" />
                                                <YAxis />
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <Tooltip />
                                                <Legend />
                                                <Line type="monotone" dataKey="confirmed" stroke="#17A2B8" activeDot={{ r: 8 }} />
                                                <Line type="monotone" dataKey="active" stroke="#FFC107" activeDot={{ r: 8 }} />
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