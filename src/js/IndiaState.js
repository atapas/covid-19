
import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import { useFetch } from './useFetch';

import Loader from 'react-loader-spinner';

const IndiaState = () => {
    const [data, loading] = useFetch('https://api.covid19india.org/data.json');

    let stateData = [];
    if (!loading) {
        console.log('State data', data);
        let stateWise = data['statewise'];
        stateData = stateWise.filter((elem, i) => i > 0);
        console.log('stateData', stateData);
    }

    return (
        <div className="indiaState">
            {
                loading ?
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    /> :

                    <Card>
                        <Card.Body>
                            <Card.Title>State Data</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                State wise break-up of COVID-19 Outbreak
                            </Card.Subtitle>
                            <Table responsive striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>State</th>
                                        <th>Confirmed</th>
                                        <th>Active</th>
                                        <th>Recovered</th>
                                        <th>Deaths</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stateData.map((data) =>
                                        <tr key={data.state}>
                                            <td>{data.state}</td>
                                            <td>{data.confirmed}</td>
                                            <td>{data.active}</td>
                                            <td>{data.recovered}</td>
                                            <td>{data.deaths}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>       
            }
            
        </div>
    )
};

export default IndiaState;