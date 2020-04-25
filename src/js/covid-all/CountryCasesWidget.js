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

import COLOR_CODES from '../utils/color_codes';

const CountryCasesWidget = props => {
    const data = props.data;
    const TOP_N = 15;

    let refinedData = [];
    
    // console.log('from TopNRecoveredWidget', data);
    let sortedData = data.sort((a, b) => b.cases - a.cases);
    // console.log('sortedData', sortedData);
    let cloned = JSON.parse(JSON.stringify(sortedData));
    let topNData = cloned.splice(0, TOP_N);
    // console.log('topNData', topNData);
    topNData.forEach(element => {
        let obj = {};
        obj['Country'] = element['country'];
        obj['Cases'] = element['cases'];
        obj['Recovered'] = element['recovered'];
        obj['Deaths'] = element['deaths'];
        refinedData.push(obj);
    });
    console.log('CountryCasesWidget refinedData', refinedData);
    

    return(
        <div className="country-all-data-widget">
            <Card >
                <Card.Body>
                    <Card.Title>Major Country Spreads(Total Cases)</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Number of Countries: <b>{TOP_N}</b></Card.Subtitle>
                    <div>
                        <ResponsiveContainer width='100%' height={400}>
                            <AreaChart data={refinedData}
                                    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="Country"/>
                                <YAxis/>
                                <Tooltip/>
                                <Area type='monotone' dataKey='Cases' stackId="1" stroke={COLOR_CODES.CATEGORIES.CONFIRMED} fill={COLOR_CODES.CATEGORIES.CONFIRMED} activeDot={{ r: 8 }}/>
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default CountryCasesWidget;