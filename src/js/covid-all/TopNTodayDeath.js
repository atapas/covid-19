/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from 'react';
import {
    ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Card from 'react-bootstrap/Card';

const TopNTodayDeath = props => {
    const data = props.data;
    const TOP_N = 5;
    const DANGER_COLOR_SHADES = [
        "rgba(255, 0, 0, 1.0)",
        "rgba(255, 0, 0, 0.8)",
        "rgba(255, 0, 0, 0.6)",
        "rgba(255, 0, 0, 0.4)",
        "rgba(255, 0, 0, 0.2)"
    ];
    let refinedData = [];
   
    let sortedData = data.sort((a, b) => b.todayDeaths - a.todayDeaths);
    let cloned = JSON.parse(JSON.stringify(sortedData));
    let topNData = cloned.splice(0, TOP_N);

    topNData.forEach(element => {
        let obj = {};
        obj['country'] = element['country'];
        obj['Today Deaths'] = element['todayDeaths'];
        refinedData.push(obj);
    });

    return (
        <div className="top-n-todays-death-widget">
            <Card >
                <Card.Body>
                    <Card.Title>Countries with maximum Deaths Today</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Number of Countries: <b>{TOP_N}</b></Card.Subtitle>
                    <div>
                        <ResponsiveContainer width='100%' height={330}>
                            <BarChart
                                data={refinedData}
                                margin={{
                                    top: 30, right: 0, left: 0, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="country" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Today Deaths" fill="rgba(255, 0, 0, 1.0)" label={{ position: 'top' }}>
                                    {
                                        refinedData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={DANGER_COLOR_SHADES[index % 20]} />
                                        ))
                                    }
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default TopNTodayDeath;