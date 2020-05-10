import React from 'react';
import {
    ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from 'recharts';

import { useFetch } from '../useFetch';
import COLOR_CODES from '../utils/color_codes';

const IndiaDistrictTrend = props => {
    const districtTrendData = props.districtTrendData;
    console.log('IndiaDistrictTrend', districtTrendData);
    return (
        <div style={{ display: 'flex' }}>
            <ResponsiveContainer width='100%' height={300}>
                <LineChart data={districtTrendData}
                    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="active" stroke={COLOR_CODES.CATEGORIES.ACTIVE} />
                    <Line type="monotone" dataKey="recovered" stroke={COLOR_CODES.CATEGORIES.RECOVERED} />
                    <Line type="monotone" dataKey="deceased" stroke={COLOR_CODES.CATEGORIES.DEATHS} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
};

export default IndiaDistrictTrend;