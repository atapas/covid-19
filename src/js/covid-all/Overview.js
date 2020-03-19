import React from "react";
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import { useFetch } from '../useFetch';
import {
    PieChart, Pie, Legend, Tooltip, Cell
} from 'recharts';

import Moment from 'react-moment';


const WorldData = () => {
    const [{ data, loading }] = useFetch(
        "https://corona.lmao.ninja/all"
    );

    let refinedData = [];
    if (!loading) {
        data['infected'] = (data.cases - (data.deaths + data.recovered));
        let keys = Object.keys(data);
        keys.forEach((elem) => {
            console.log(elem);
            if (elem === 'cases' || elem === 'updated') {
                return;
            }
            let obj = {};
            obj['name'] = elem;
            obj['value'] = data[elem];
            refinedData.push(obj);
        });
        console.log('refinedData', refinedData);

    }

    const COLORS = ['#DC3545', '#28A745', '#FFC107'];
    console.log(loading, data);

    return (
        <div className="worldData">
            <Card >
                <Card.Body>
                    <Card.Title>Recovery vs Death as on <Moment format="YYYY/MM/DD">{data.updated}</Moment></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Total Cases: {data.cases}</Card.Subtitle>
                    <div>
                    {loading ? <h3>Loading...</h3> :
                        <div>
                            <PieChart width={350} height={300}>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={true}
                                    data={refinedData}
                                    cx={100}
                                    cy={150}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label>
                                    {
                                        refinedData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                                    }
                                </Pie>
                                <Tooltip />
                            </PieChart>
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
                    }
                    </div>
                </Card.Body>
            </Card>
            
            
        </div>
    )
};

export default WorldData;