/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from 'react';
import Card from 'react-bootstrap/Card';
import {
    ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip
} from 'recharts';

import INDIA_STATE_CODES from '../utils/india_state_codes';

const StateIndiaMostConfirmed = props => {
    const MIN_CASES_TO_SHOW = 200;
    const data = props.data;

    let filteredData = data.filter(elem => {
        return elem.active > MIN_CASES_TO_SHOW;
    });

    let refinedData = [];
    filteredData.forEach(element => {
        let obj = {};
        obj['State'] = element['state'];
        obj['State Code'] = INDIA_STATE_CODES[element['state']];
        obj['Confirmed'] = element['confirmed'];
        obj['Active'] = element['active'];
        obj['Deaths'] = element['deaths'];
        obj['Recovered'] = element['recovered'];
        obj['New Case(Today)'] = element['deltaconfirmed'];
        obj['New Deaths(Today)'] = element['deltadeaths'];
        obj['New Recovery(Today)'] = element['deltarecovered'];
        refinedData.push(obj);
    });

    const parseDomain = () => {
        return [
          0,
          Math.max.apply(null, [
            ...refinedData.map(entry => entry.Active)
          ])
        ];
    };
      
    let domain = parseDomain();
    const range = [1, domain[1]];
    domain[1] = domain[1] * 2;
    
    console.log(domain);
    console.log(range);
    

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
          return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].payload.State}`}: {`${payload[0].payload.Confirmed}`} Confirmed</p>
                <p className="intro">
                    {`Active Cases: ${payload[0].payload.Active}`}<br />
                    {`Total Deaths: ${payload[0].payload.Deaths}`}<br />
                    {`Total Recovered: ${payload[0].payload.Recovered}`}<br />
                    <b>Today</b><br />
                    {`New Cases: ${payload[0].payload['New Case(Today)']}`}<br />
                    {`New Deaths: ${payload[0].payload['New Deaths(Today)']}`}<br />
                    {`New Recoveries: ${payload[0].payload['New Recovery(Today)']}`}
                </p>
            </div>
          );
        }
      
        return null;
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>State: Most Affected(Minimum {MIN_CASES_TO_SHOW} Active Cases)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    States with most number of Active cases.
                </Card.Subtitle>
                <ResponsiveContainer width='100%' height={350}>
                    <ScatterChart  margin={{
                            top: 30, right: 0, left: 0, bottom: 5,
                    }} >
                    <CartesianGrid />
                    <XAxis dataKey={'State Code'} name='State' />
                    <YAxis dataKey={'Active'} type="number"  domain={domain} range={range} name='Active' />
                    <ZAxis type="number" dataKey={'Active'} domain={domain} range={range} />
                    <Scatter name='COVID-19 India' data={refinedData} fill='#B96666' />
                    <Tooltip 
                        cursor={{strokeDasharray: '3 3'}} 
                        wrapperStyle={{ zIndex: 100 }} 
                        content={<CustomTooltip />} />
                    </ScatterChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card>
    );
};

export default StateIndiaMostConfirmed;