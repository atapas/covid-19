
import React from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Card from 'react-bootstrap/Card';

const TopNRecoveredWidget = props => {
    const loading = props.loading;
    const data = props.data;
    // console.log('from TopNRecoveredWidget', loading, data);
    const TOP_N = 5;
    const SUCCESS_COLOR_SHADES = [
        "rgba(40, 167, 69, 1.0)",
        "rgba(40, 167, 69, 0.9)",
        "rgba(40, 167, 69, 0.8)",
        "rgba(40, 167, 69, 0.7)",
        "rgba(40, 167, 69, 0.6)",
        "rgba(40, 167, 69, 0.5)",
        "rgba(40, 167, 69, 0.4)",
        "rgba(40, 167, 69, 0.5)",
        "rgba(40, 167, 69, 0.2)",
        "rgba(40, 167, 69, 0.1)"
    ];

    let refinedData = [];
    if (!loading) {
        console.log('from TopNRecoveredWidget', data);
        let mappedData = data.map(elem => {
            elem['recovPerc'] = Math.round((elem['recovered'] * 100) / elem['cases']);
            return elem;
        });
        let sortedData = mappedData.sort((a, b) => b.recovPerc - a.recovPerc);
        // console.log('sortedData', sortedData);
        let cloned = JSON.parse(JSON.stringify(sortedData));
        let topNData = cloned.splice(0, TOP_N);
        // console.log('topNData', topNData);
        topNData.forEach(element => {
            let obj = {};
            obj['country'] = element['country'];
            obj['%recovered'] = element['recovPerc'];
            refinedData.push(obj);
        });
        console.log('refinedData', refinedData);
    }

    return (
        <div className="top-n-recovered-widget">
            <Card >
                <Card.Body>
                    <Card.Title>Top N Countries Recovered Well</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Number of Countries: <b>{TOP_N}</b></Card.Subtitle>
                    <div>
                        {loading ? <h3>Loading...</h3> :
                            <div>
                                <BarChart
                                    width={700}
                                    height={300}
                                    data={refinedData}
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="country" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="%recovered" fill="rgba(40, 167, 69, 1.0)" label={{ position: 'top' }}>
                                        {
                                            refinedData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={SUCCESS_COLOR_SHADES[index % 20]} />
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

export default TopNRecoveredWidget;