
import React from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

import red_up_arrow from '../../assets/images/up_red_arrow.png';
import green_up_arrow from '../../assets/images/up_green_arrow.png';

const IndiaState = props => {
    const stateData = props.data;

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
                                    <td>
                                        <div>
                                            <span>{data.confirmed}</span>{' '} 
                                            {
                                                data['delta']['active'] > 0 ?
                                                    <span title="Increase in the Confirmed cases today">
                                                        [<img src={red_up_arrow} height="20px" width="20px"/>
                                                        {data['delta']['active']}]
                                                    </span> : null
                                            }
                                            
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span>{data.active}</span>{' '} 
                                            {
                                                data['delta']['active'] > 0 ?
                                                    <span title="Increase in the Active cases today">
                                                        [<img src={red_up_arrow} height="20px" width="20px"/>
                                                        {data['delta']['active']}]
                                                    </span> : null
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span>{data.recovered}</span>{' '}
                                            {
                                                data['delta']['recovered'] > 0 ?
                                                    <span title="Increase in the Recovered cases today">
                                                        [<img src={green_up_arrow} height="20px" width="20px"/>
                                                        {data['delta']['recovered']}]
                                                    </span> : null
                                            }
                                             
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span>{data.deaths}</span>{' '}
                                            {
                                                data['delta']['deaths'] > 0 ?
                                                    <span title="Increase in the Death cases today">
                                                        [<img src={red_up_arrow} height="20px" width="20px"/>
                                                        {data['delta']['deaths']}]
                                                    </span> : null
                                            }
                                        </div>
                                    </td>
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