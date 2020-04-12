/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from 'react';
import {
    ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import Card from 'react-bootstrap/Card';

const TimeSeriesPercentage = props => {
    const data = props.data;

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload[0]) {
          return (
            <div className="custom-tooltip">
                <h5>{`On ${label}`}</h5>
                <p className="label">
                    New Cases Changed: <span style={{color: '#F55F20'}}><b>{payload[0].payload['% Change']}%</b></span>
                </p>
                <hr />
                <p className="intro">
                    {`Total Cases: ${payload[0].payload['Actial value']}`}<br/>
                    {`Change since last day: ${payload[0].payload['Actual Change']} Cases`}
                </p>
            </div>
          );
        }
      
        return null;
    };

    return(
        <div className="time-series-percentage-cases">
            <Card >
                <Card.Body>
                    <Card.Title>
                        New Cases Trends - % Changes Per day
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Percentage(%) Changes seen in New Cases at the Daily Basis.</Card.Subtitle>
                    <div>
                        
                        <ResponsiveContainer width='100%' height={400}>
                            <AreaChart  data={data}
                                    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="date"/>
                                <YAxis/>
                                <Tooltip content={<CustomTooltip />}/>
                                <Area type='monotone' dataKey='% Change' stackId="1" stroke='#F55F20' fill='#F55F20' activeDot={{ r: 8 }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
};

export default TimeSeriesPercentage;