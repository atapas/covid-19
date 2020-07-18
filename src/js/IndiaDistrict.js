import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import red_up_arrow from '../../assets/images/up_red_arrow.png';
import green_up_arrow from '../../assets/images/up_green_arrow.png';

import IndiaDistrictTrend from './time-series/IndiaDistrictTrend';
import Table from 'react-bootstrap/Table';

const IndiaDistrict = props => {
    const data = props.districtData;
    // const districtTrend = props.districtTrend;
    const districts = Object.keys(data).sort((a, b) => data[b].delta.confirmed - data[a].delta.confirmed);
    const [expandedRows, setExpandedRows] = useState([]);
    const [expandDistrict, setExpandDistrict] = useState({});
    // const [districtTrendDetails, setDistrictTrendDetails] = useState();

    /*const handleExpandRow = (trendDetails, district) => {
        const currentExpandedRows = expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(district);
        setDistrictTrendDetails(trendDetails);

        let tempState = {};
        if (isRowCurrentlyExpanded) {
            let obj = {};
            obj[district] = false;
            tempState = Object.assign({}, obj);

        } else {
            let obj = {};
            obj[district] = true;
            tempState = Object.assign({}, obj);
        }

        setExpandDistrict(tempState)

        const newExpandedRows = isRowCurrentlyExpanded ?
            currentExpandedRows.filter(dist => dist !== district) :
            currentExpandedRows.concat(district);

        setExpandedRows(newExpandedRows);
    }*/


    return (

        <>
            <Table>
                <tbody>
                    {districts.map((name) =>
                        <>
                            <tr key={name}>
                                📣 {name}: {data[name]['confirmed']}
                                <span style={{ marginLeft: '20px', fontSize: '14px' }}>
                                    <span>
                                        Active: {data[name]['active']}
                                        {data[name]['delta']['confirmed'] > 0
                                            ?
                                            <span>
                                                {' '}[<img src={red_up_arrow} height="15px" width="15px" /> {data[name]['delta']['confirmed']}]
                                                </span>
                                            : null
                                        }
                                    </span>
                                    <span style={{ marginLeft: '10px' }}>
                                        Recovered: {data[name]['recovered']}
                                        {data[name]['delta']['recovered'] > 0
                                            ?
                                            <span>
                                                {' '}[<img src={green_up_arrow} height="15px" width="15px" /> {data[name]['delta']['recovered']}]
                                                </span>
                                            : null
                                        }
                                    </span>
                                    <span style={{ marginLeft: '10px' }}>
                                        Deaths: {data[name]['deceased']}
                                        {data[name]['delta']['deceased'] > 0
                                            ?
                                            <span>
                                                {' '}[<img src={red_up_arrow} height="15px" width="15px" /> {data[name]['delta']['deceased']}]
                                                </span>
                                            : null
                                        }
                                    </span>
                                    {/*<span style={{ float: 'right'}}>
                                        <Button
                                            variant="link"
                                            onClick={event => handleExpandRow(districtTrend[name], name)}>
                                            <i className="fas fa-chart-line" style={{ marginRight: '5px' }}></i>
                                            {expandDistrict[name] ? <span style={{ fontSize: '12px'}}>{'Hide Trend'}</span>
                                            : <span style={{ fontSize: '12px'}}>{'Show Trend'}</span>}
                                        </Button>
                                    </span>
                                    */}
                                </span>
                            </tr>
                            <>
                                {/*
                                expandedRows.includes(name) ?
                                    <tr className="expandedRow" key={"row-expanded-" + name}>
                                        <td colSpan="5">
                                            <div className="district">
                                                <IndiaDistrictTrend districtTrendData={districtTrendDetails} />
                                            </div>
                                        </td>
                                    </tr> : null
                            */}
                            </>
                        </>
                    )}
                </tbody>
            </Table>

        </>
    )
};

export default IndiaDistrict;