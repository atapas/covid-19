
import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const IndiaState = props => {
    const data = props.data;
    let stateData = [];
    console.log('State data', data);
    let stateWise = data['statewise'];
    stateData = stateWise.filter((elem, i) => i > 0);
    console.log('stateData', stateData);

    return (
        <div className="indiaState">
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
        </div>
    )
};

export default IndiaState;