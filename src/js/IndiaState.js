/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useFetch } from './useFetch';
import { URL_INDIA_DISTRICT_DAILY } from './utils/url';

import red_up_arrow from '../../assets/images/up_red_arrow.png';
import green_up_arrow from '../../assets/images/up_green_arrow.png';

import IndiaDistrict from './IndiaDistrict';

const IndiaState = props => {
    const stateData = props.data;
    const [expandedRows, setExpandedRows] = useState([]);
    const [districtData, loadingDistrictData] = useFetch('https://api.covid19india.org/state_district_wise.json');
    const [districtTrend, loadingDistrictTrend] = useFetch(URL_INDIA_DISTRICT_DAILY);
    const [expandState, setExpandState] = useState({});

    const sortedStateData = stateData.sort((a,b) => b.deltaconfirmed - a.deltaconfirmed);

    const handleEpandRow = (event, state) => {
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

    return (
        <div className="indiaState">
            <Card>
                <Card.Body>
                    <Card.Title>States and UTs({sortedStateData.length})</Card.Title>
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
                            {sortedStateData.map((data) =>
                                <>
                                    <tr key={data.state}>
                                        <td>
                                            {expandState[data.state] ?  <span>👇</span> : <span>👉</span> }
                                            <Button
                                                style={{paddingRight: '2px'}}
                                                variant="link"
                                                onClick={event => handleEpandRow(event, data.state)}>
                                                {data.state}
                                            </Button>
                                            { data.lastupdatedtime && 
                                                <span style={{fontSize: '12px'}}>(Updated at: {data.lastupdatedtime})</span>
                                            }
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
                                            !loadingDistrictTrend && !loadingDistrictData && expandedRows.includes(data.state) ?
                                                <tr className="expandedRow" key={"row-expanded-" + data.state}>
                                                    <td colSpan="5">
                                                        <div className="district">
                                                            <IndiaDistrict 
                                                                districtData = { districtData[data.state]['districtData']}
                                                                districtTrend = { districtTrend.districtsDaily[data.state] } />
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