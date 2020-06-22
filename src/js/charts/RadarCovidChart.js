
import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    Legend,
    PolarAngleAxis,
    PolarRadiusAxis,
    Tooltip,
    ResponsiveContainer 
} from 'recharts';

import COLOR_CODES from '../utils/color_codes';

const RadarCovidChart = props => {

    const data = props.radarData;
    const key = props.chartKey;

    let color = COLOR_CODES.RANDOM.BLACK;
    let name = 'None';
    if (key === 'deaths') {
        color = COLOR_CODES.CATEGORIES.DEATHS;
        name = 'Deaths';
    } else if (key === 'active') {
        color = COLOR_CODES.CATEGORIES.ACTIVE;
        name = 'Active';
    } else if (key === 'recovered') {
        color = COLOR_CODES.CATEGORIES.RECOVERED;
        name = 'Recovered';
    } else if (key === 'confirmed') {
        color = COLOR_CODES.CATEGORIES.CONFIRMED;
        name = 'Confirmed';
    }

    let sliced = data.slice(0, props.top_n);
    console.log('RadarCovidChart', sliced, key);

    return(
        <ResponsiveContainer width='100%' height={430}>
            <RadarChart cx={300} cy={250} outerRadius={150} data={sliced}>
                <PolarGrid />
                <Tooltip />
                <PolarAngleAxis dataKey="state" />
                <PolarRadiusAxis />
                <Radar name={name} dataKey={key} stroke={color} fill={color} fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
};

export default RadarCovidChart;