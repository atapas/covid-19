
import React from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Card from 'react-bootstrap/Card';
import Loader from 'react-loader-spinner';

const TopNTodayDeath = props => {
    const loading = props.loading;
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
    if (!loading) {
        let sortedData = data.sort((a, b) => b.todayDeaths - a.todayDeaths);
        // console.log('sortedData', sortedData);
        let cloned = JSON.parse(JSON.stringify(sortedData));
        let topNData = cloned.splice(0, TOP_N);
        // console.log('topNData', topNData);
        topNData.forEach(element => {
            let obj = {};
            obj['country'] = element['country'];
            obj['Today Deaths'] = element['todayDeaths'];
            refinedData.push(obj);
        });
        console.log('TopNTodayDeath refinedData', refinedData);
    }

    return (
        <div className="top-n-todays-death-widget">
            <Card >
                <Card.Body>
                    <Card.Title>Countries with maximum deaths today</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Number of Countries: <b>{TOP_N}</b></Card.Subtitle>
                    <div>
                        {loading ? 
                            <Loader
                                type="ThreeDots"
                                color="#00BFFF"
                                height={100}
                                width={100}
                            />  :
                            <div>
                                <BarChart
                                    width={420}
                                    height={330}
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
                            </div>}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default TopNTodayDeath;