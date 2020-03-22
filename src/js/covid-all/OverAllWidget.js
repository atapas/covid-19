import React from "react";
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import {
    ResponsiveContainer, PieChart, Pie, Legend, Tooltip, Cell
} from 'recharts';

import Moment from 'react-moment';
import Loader from 'react-loader-spinner';
import CurrencyFormat from 'react-currency-format';

const WorldData = props => {
    const loading = props.loading;
    const data = props.data;
    // console.log('from OverAllWidget', loading, data);

    let refinedData = [];
    if (!loading) {
        data['infected'] = (data.cases - (data.deaths + data.recovered));
        let keys = Object.keys(data);
        keys.forEach((elem) => {
            // console.log(elem);
            if (elem === 'cases' || elem === 'updated') {
                return;
            }
            let obj = {};
            obj['name'] = elem;
            obj['value'] = data[elem];
            refinedData.push(obj);
        });
        // console.log('refinedData', refinedData);
    }
    const COLORS = ['#DC3545', '#28A745', '#FFC107'];
    return (
        <div className="worldData">
            <Card >
                <Card.Body>
                    <Card.Title>
                        Total Cases: <CurrencyFormat value={data.cases} displayType={'text'} thousandSeparator={true} /> as on <Moment format="YYYY/MM/DD">{data.updated}</Moment>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Recovery, Deaths and Still Infected</Card.Subtitle>
                    <div>
                    {loading ? 
                        <Loader
                            type="ThreeDots"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        /> 
                        :
                        <div>
                            <ResponsiveContainer width='100%' height={308}>
                                <PieChart>
                                    <Pie
                                        dataKey="value"
                                        isAnimationActive={true}
                                        data={refinedData}
                                        cx={180}
                                        cy={150}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        label>
                                        {
                                            refinedData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                        }
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="legends">
                                <Badge variant="success" className="recovered">
                                    {`Recovered - ${Math.round((data.recovered * 100) / data.cases)}%`}
                                </Badge>
                                <Badge variant="warning" className="medication">
                                    {`Infected - ${Math.round(((data.infected) * 100) / data.cases)}%`}
                                </Badge>
                                <Badge variant="danger" className="deaths">
                                    {`Deaths - ${Math.round((data.deaths * 100) / data.cases)}%`}
                                </Badge>
                            </div>    
                        </div>
                    }
                    </div>
                </Card.Body>
            </Card>
            
            
        </div>
    )
};

export default WorldData;