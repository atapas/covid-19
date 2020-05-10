import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import red_up_arrow from '../../assets/images/up_red_arrow.png';
import green_up_arrow from '../../assets/images/up_green_arrow.png';

import IndiaDistrictTrend from './time-series/IndiaDistrictTrend';

const IndiaDistrict = props => {
    const data = props.districtData;
    const districtTrend = props.districtTrend;
    const districts = Object.keys(data).sort((a, b) => data[b].delta.confirmed - data[a].delta.confirmed);
    const [showTrend, setShowTrend] = useState(false);
    const [trendText, setTrendText] = useState('Show Trends');

    const toggleTrends = () => {
        setShowTrend(!showTrend)
        if (!showTrend) {
            setTrendText('Hide Trends');
        } else {
            setTrendText('Show Trends');
        }
    }

    return (
        <>
            <Button
                variant="link"
                onClick={event => toggleTrends()}>
                <i class="fas fa-chart-line" style={{marginRight: '5px'}}></i>
                {trendText}
            </Button>
            <ul style={{ padding: '0px' }}>

                {
                    districts.map((name, index) =>
                        <li
                            key={name}
                            style={(index % 2) === 0 ? { backgroundColor: '#ececec' } : { backgroundColor: '#ffffff' }}>
                            📣
                        <span> {name}: {data[name]['confirmed']}</span>
                            <span style={{ marginLeft: '20px', fontSize: '12px' }}>
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
                                {
                                    showTrend &&
                                    <IndiaDistrictTrend districtTrendData={districtTrend[name]} />
                                }
                                {
                                    data[name]['notes'] && data[name]['notes'].length > 0
                                        ?
                                        <div class='notes'>
                                            <i class="fas fa-info icon"></i>
                                            {data[name]['notes']}
                                        </div> : null
                                }

                            </span>
                        </li>
                    )}
            </ul>
            <Button
                variant="link"
                onClick={event => toggleTrends()}>
                <i class="fas fa-chart-line" style={{marginRight: '5px'}}></i>
                {trendText}
            </Button>
        </>
    )
};

export default IndiaDistrict;