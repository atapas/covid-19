
import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import Card from 'react-bootstrap/Card';

const TimeSeriesBroken = props => {
    const data = props.data;
    console.log('TimeSeriesBroken data', data);
    
    return (

        <div className="time-series-broken-cases">
            <Card >
                <Card.Body>
                    <Card.Title>Trends - New Cases Found per Day</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">New cases reported daily basis</Card.Subtitle>
                    <div>
                        <AreaChart width={920} height={400} data={data}
                                margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="date"/>
                            <YAxis/>
                            <Tooltip/>
                            <Area type='monotone' dataKey='confirmed' stackId="1" stroke='#8B0000' fill='#8B0000' />
                        </AreaChart>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default TimeSeriesBroken;