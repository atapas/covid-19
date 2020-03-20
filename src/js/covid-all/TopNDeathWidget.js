
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Loader from 'react-loader-spinner';

const TopNDeathWidget = props => {
    const loading = props.loading;
    const data = props.data;
    const TOP_N = 5;
    const DANGER_COLOR_SHADES = [
        "rgba(255, 0, 0, 1.0)",
        "rgba(255, 0, 0, 0.9)",
        "rgba(255, 0, 0, 0.8)",
        "rgba(255, 0, 0, 0.7)",
        "rgba(255, 0, 0, 0.6)",
        "rgba(255, 0, 0, 0.5)",
        "rgba(255, 0, 0, 0.4)",
        "rgba(255, 0, 0, 0.5)",
        "rgba(255, 0, 0, 0.2)",
        "rgba(255, 0, 0, 0.1)"
    ];

    let refinedData = [];
    if (!loading) {
        // console.log('from TopNRecoveredWidget', data);
        let sortedData = data.sort((a, b) => b.deaths - a.deaths);
        // console.log('sortedData', sortedData);
        let cloned = JSON.parse(JSON.stringify(sortedData));
        let topNData = cloned.splice(0, TOP_N);
        // console.log('topNData', topNData);
        topNData.forEach(element => {
            let obj = {};
            obj['country'] = element['country'];
            obj['deaths'] = element['deaths'];
            refinedData.push(obj);
        });
        // console.log('refinedData', refinedData);
    }

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}
                C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
                C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
                Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    TriangleBar.propTypes = {
        fill: PropTypes.string,
        x: PropTypes.number,
        y: PropTypes.number,
        width: PropTypes.number,
        height: PropTypes.number,
    };

    return (
        <div className="top-n-death-widget">
            <Card >
                <Card.Body>
                    <Card.Title>Top N Countries with Death Impact</Card.Title>
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
                                <BarChart width={500} height={330} data={refinedData}
                                    margin={{ top: 30, right: 0, left: 0, bottom: 5 }}
                                >
                                    <XAxis dataKey="country" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Bar dataKey="deaths" fill="rgba(255, 0, 0, 1.0)" shape={<TriangleBar />} label={{ position: 'top' }}>
                                        {
                                            refinedData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={DANGER_COLOR_SHADES[index % 20]} />
                                            ))
                                        }
                                    </Bar>
                                </BarChart>
                            </div>
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default TopNDeathWidget;