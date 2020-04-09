
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useFetch } from './useFetch';

import red_up_arrow from '../../assets/images/up_red_arrow.png';
import green_up_arrow from '../../assets/images/up_green_arrow.png';

import WidgetContainer from './WidgetContainer';

const IndiaState = props => {
    const stateData = props.data;
    const [expandedRows, setExpandedRows] = useState([]);
    const [districtData, loadingDistrictData] = useFetch('https://api.covid19india.org/state_district_wise.json');
    const [expandState, setExpandState] = useState({});

    const handleEpandRow = (event, state) => {
        console.log('Expanding state', state);
        const currentExpandedRows = expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(state);

        let tempState = {};
        if (isRowCurrentlyExpanded) {
            let obj = {};
            obj[state] = false;
            tempState = Object.assign({}, obj);
            
        } else {
            let obj = {};
            obj[state] = true;
            tempState = Object.assign({}, obj);
        }

        setExpandState(tempState)

        const newExpandedRows = isRowCurrentlyExpanded ?
            currentExpandedRows.filter(st => st !== state) :
            currentExpandedRows.concat(state);

        setExpandedRows(newExpandedRows);
    }

    const getDistrictData = state => {
        let toRender = '<ul>';
        if (!loadingDistrictData) {
            if (districtData[state]) {
                let data = districtData[state]['districtData'];
                console.log('districtData', data);
                let districts = Object.keys(data).sort((a, b) => data[b].confirmed - data[a].confirmed)

                districts.forEach(name => {
                    toRender = toRender + `<li key=${name}>📣 <span>${name}: ${data[name]['confirmed']}</span></li>`;
                });
            } else {
                toRender = toRender + '<h5>No data available</h5>';
            }
        }
        toRender = toRender + '</ul>';
        console.log('toRender', toRender);
        return toRender;
    }


    return (
        <div className="indiaState">
            <Card>
                <WidgetContainer children = {
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
                                                {expandState[data.state] ?  <span>👇</span> : <span>👉</span> }
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
                                                        data['deltaconfirmed'] > 0 ?
                                                            <span title="Increase in the Confirmed cases today">
                                                                [<img src={red_up_arrow} height="20px" width="20px" />
                                                                {data['deltaconfirmed']}]
                                                            </span> : null
                                                    }

                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span>{data.active}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span>{data.recovered}</span>{' '}
                                                    {
                                                        data['deltarecovered'] > 0 ?
                                                            <span title="Increase in the Recovered cases today">
                                                                [<img src={green_up_arrow} height="20px" width="20px" style={{marginRight:'4px', marginLeft: '3px'}} />
                                                                {data['deltarecovered']}]
                                                            </span> : null
                                                    }

                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span>{data.deaths}</span>{' '}
                                                    {
                                                        data['deltadeaths'] > 0 ?
                                                            <span title="Increase in the Death cases today">
                                                                [<img src={red_up_arrow} height="20px" width="20px" />
                                                                {data['deltadeaths']}]
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
                                                                className="district"
                                                                dangerouslySetInnerHTML={{ __html: getDistrictData(data.state) }}>
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
                } />
            </Card>
        </div>
    )
};

export default IndiaState;