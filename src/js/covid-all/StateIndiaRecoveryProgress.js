/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from 'react';
import Card from 'react-bootstrap/Card';
import {
    ResponsiveContainer,
    ComposedChart,
    BarChart,
    Bar,
    Line,
    Area,
    Cell,
    XAxis, 
    YAxis, 
    CartesianGrid,
    Tooltip,
    Legend,
    Label,
    LabelList
} from 'recharts';

import INDIA_STATE_CODES from '../utils/india_state_codes';

const StateIndiaRecoveryProgress = props => {
    const data = props.data;
    
    let topNData = data.filter((elem) => {
        return elem.confirmed > 0;
    });

    let refinedData = [];
    topNData.forEach(element => {
        let obj = {};
        obj['State'] = element['state'];
        obj['% Recovered'] = element['perctRecoverd'];
        obj['% Deaths'] = element['perctDeaths'];
        obj['active'] = element['active'];
        obj['% Active'] = element['perctActive'];
        obj['confirmed'] = element['confirmed'];
        obj['recovered'] = element['recovered'];
        obj['deaths'] = element['deaths'];
        obj['State Code'] = INDIA_STATE_CODES[element['state']];
        refinedData.push(obj);
    });

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="label">
                        <span>{payload[0].payload.State}({`Cases: ${payload[0].payload.confirmed}`})</span>
                    </p>
                    <p className="intro">
                        <span style={{color: '#FFC107'}}>
                            {`Acive Cases: ${payload[0].payload.active}(${payload[0].payload['% Active']}%)`}
                        </span> <br />
                        <span style={{color: '#28A745'}}>
                            {`Recovered Cases: ${payload[0].payload.recovered}(${payload[0].payload['% Recovered']}%)`}
                        </span> <br />
                        <span style={{color: '#DC3545'}}>
                            {`Death Cases: ${payload[0].payload.deaths}(${payload[0].payload['% Deaths']}%)`}
                        </span>
                    </p>
                </div>
            );
        }

        return null;
    };

    const renderCustomizedLabel = (props) => {
        const { x, y, width, height, value } = props;
        const radius = 18;

        return (
            <g>
                <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#FFF" />
                <text x={x + width / 2} y={y - radius} fill="#000" textAnchor="middle" dominantBaseline="middle">
                    {value}%
                </text>
            </g>
        );
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>State: Recovery Progress</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    State with the Active, Recovery and Death percentages
                </Card.Subtitle>
                <ResponsiveContainer width='100%' height={330}>
                    <ComposedChart  data={refinedData}
                        margin={{
                            top: 30, right: 0, left: 0, bottom: 5,
                        }}>
                        <XAxis dataKey="State Code" />
                        <YAxis/>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend/>
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="% Recovered" fill="rgba(40, 167, 69, 1.0)">
                            <LabelList dataKey="% Recovered" position="top" content={renderCustomizedLabel} />
                        </Bar>
                        <Area type='monotone' dataKey='% Active' fill='#FFC107' stroke='#FFC107'/>
                        <Line type='monotone' dataKey='% Deaths' stroke='#DC3545'/>
                    </ComposedChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    );
};

export default StateIndiaRecoveryProgress;