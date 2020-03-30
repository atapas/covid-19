
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useFetch } from './useFetch';

import red_up_arrow from '../../assets/images/up_red_arrow.png';
import green_up_arrow from '../../assets/images/up_green_arrow.png';

const IndiaState = props => {
    const stateData = props.data;
    const [expandedRows, setExpandedRows] = useState([]);
    const [districtData, loadingDistrictData] = useFetch('https://api.covid19india.org/state_district_wise.json');

    const handleEpandRow = (event, state) => {
        console.log('Expanding state', state);
        const currentExpandedRows = expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(state);

        const newExpandedRows = isRowCurrentlyExpanded ? 
			currentExpandedRows.filter(st => st !== state) : 
            currentExpandedRows.concat(state);
            
        setExpandedRows(newExpandedRows);
    }

    const getDistrictData = state => {
        let toRender = '<div className="district"><ul>';
        if (!loadingDistrictData) {
            let data = districtData[state]['districtData'];
            console.log('districtData', data);
            let districts = Object.keys(data).sort((a,b) => data[b].confirmed - data[a].confirmed)
            
            districts.forEach(name => {
                toRender = toRender + `<li key=${name}><span>${name}: ${data[name]['confirmed']}</span></li>`;
            });
            
        }
        toRender = toRender + '</ul></div>';
        console.log('toRender', toRender);
        return toRender;
    }
    

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
                                <>
                                    <tr key={data.state}>
                                        <td>
                                            <Button 
                                                variant="link" 
                                                onClick={event => handleEpandRow(event, data.state)}>
                                                {data.state}
                                            </Button>
                                        </td>
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
                                    <>
                                        {
                                            !loadingDistrictData && expandedRows.includes(data.state) ?
                                                <tr className="expandedRow" key={"row-expanded-" + data.state}>
                                                    <td colSpan="5">
                                                        <div 
                                                            dangerouslySetInnerHTML={{__html: getDistrictData(data.state)}}>
                                                        </div>
                                                        
                                                    </td>
                                                </tr> : null
                                        }
                                    </>
                                </>
                                
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>       
        </div>
    )
};

export default IndiaState;