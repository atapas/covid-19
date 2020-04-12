/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from 'react';
import Card from 'react-bootstrap/Card';
import {
    ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import INDIA_STATE_CODES from '../utils/india_state_codes';

const StateIndiaMostRecovered = props => {
    const data = props.data;
    const TOP_N = 5;
    const SUCCESS_COLOR_SHADES = [
        "rgba(40, 167, 69, 1.0)",
        "rgba(40, 167, 69, 0.9)",
        "rgba(40, 167, 69, 0.8)",
        "rgba(40, 167, 69, 0.7)",
        "rgba(40, 167, 69, 0.6)",
        "rgba(40, 167, 69, 0.5)",
        "rgba(40, 167, 69, 0.4)",
        "rgba(40, 167, 69, 0.5)",
        "rgba(40, 167, 69, 0.2)",
        "rgba(40, 167, 69, 0.1)"
    ];

    let cloned = JSON.parse(JSON.stringify(data));
    let topNData = cloned.splice(0, TOP_N);
    
    let refinedData = [];
    topNData.forEach(element => {
        let obj = {};
        obj['State'] = element['state'];
        obj['% Recovered'] = element['perctRecoverd'];
        obj['confirmed'] = element['confirmed'];
        obj['recovered'] = element['recovered'];
        obj['State Code'] = INDIA_STATE_CODES[element['state']];
        refinedData.push(obj);
    });

    console.group('StateIndiaMostRecovered');
    console.groupCollapsed();
    console.log('refinedData', refinedData);
    console.groupEnd();

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].payload.State} : ${payload[0].value}`}% Recovered</p>
                <p className="intro">
                    {`Recovered Cases: ${payload[0].payload.recovered}`}<br />
                    {`Total Cases: ${payload[0].payload.confirmed}`}
                </p>
            </div>
          );
        }
      
        return null;
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>State: Most Recovered</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    State with the higher number of Recovery percentage
                </Card.Subtitle>
                <ResponsiveContainer width='100%' height={330}>
                    <BarChart
                        data={refinedData}
                        margin={{
                            top: 30, right: 0, left: 0, bottom: 5,
                        }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="State Code" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />}/>
                    <Legend />
                    <Bar dataKey="% Recovered" fill="rgba(40, 167, 69, 1.0)" label={{ position: 'top' }}>
                        {
                            refinedData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={SUCCESS_COLOR_SHADES[index % 20]} />
                            ))
                        }
                    </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    );
};

export default StateIndiaMostRecovered;