/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React, {useState} from 'react';
import {
    ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const TimeSeriesBroken = props => {
    const data = props.data;
    const [type, setType] = useState('confirmed');
    const [chartColor, setChartColor] = useState('#17A2B8');
    const [btnState, setBtnState] = useState({
        'confirmed': true,
        'active': false,
        'recovered': false,
        'deaths': false
    });

    const handleTypeClick = (type, color) => {
        setType(type);
        setChartColor(color);
        let tempState = Object.assign({}, {
            'confirmed': false,
            'active': false,
            'recovered': false,
            'deaths': false
        });
        tempState[type] = 'true';
        setBtnState(tempState); 

    }
    
    return (

        <div className="time-series-broken-cases">
            <Card >
                <Card.Body>
                    <Card.Title>
                        Trends - Number of New Cases Found per Day
                        <div className="type-btn-grp">
                            <ButtonGroup aria-label="Basic example">
                                <Button 
                                    variant="secondary" 
                                    className={btnState.confirmed ? 'selected' : null}
                                    onClick={e => handleTypeClick('confirmed', '#17A2B8')}>
                                    Confirmed
                                </Button>
                                <Button 
                                    variant="secondary"
                                    className={btnState.active ? 'selected' : null} 
                                    onClick={e => handleTypeClick('active', '#FFC107')}>
                                    Active
                                </Button>
                                <Button 
                                    variant="secondary" 
                                    className={btnState.recovered ? 'selected' : null} 
                                    onClick={e => handleTypeClick('recovered', '#28A745')}>
                                    Recovered
                                </Button>
                                <Button 
                                    variant="secondary" 
                                    className={btnState.deaths ? 'selected' : null} 
                                    onClick={e => handleTypeClick('deaths', '#DC3545')}>
                                    Deaths
                                </Button>
                            </ButtonGroup>
                        </div>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Number of New cases reported daily basis</Card.Subtitle>
                    <div>
                        
                        <ResponsiveContainer width='100%' height={400}>
                            <AreaChart  data={data}
                                    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="date"/>
                                <YAxis/>
                                <Tooltip/>
                                <Area type='monotone' dataKey={type} stackId="1" stroke={chartColor} fill={chartColor} activeDot={{ r: 8 }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default TimeSeriesBroken;