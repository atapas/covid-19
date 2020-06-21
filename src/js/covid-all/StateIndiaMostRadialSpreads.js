/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import RadarCovidChart from '../charts/RadarCovidChart';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import INDIA_STATE_CODES from '../utils/india_state_codes';

const StateIndiaMostRadialSpreads = props => {
    const [type, setType] = useState('active');
    const [btnState, setBtnState] = useState({
        'active': true,
        'recovered': false,
        'deaths': false
    });
    const activeData = props.activeData;
    const deathData = props.deathData;
    const recoveredData = props.recovered;
    const totalActiveIndia = props.total;

    const TOP_N = 12;

    let refinedData = [];

    if (type === 'active') {
        activeData.forEach(element => {
            let obj = {};
            obj['state'] = element['state'];
            obj[type] = parseInt(element[type], 10);
            obj['total'] = parseInt(totalActiveIndia.active, 10);
            refinedData.push(obj);
        });
    } else if(type === 'deaths') {
        deathData.forEach(element => {
            let obj = {};
            obj['state'] = element['state'];
            obj[type] = parseInt(element[type], 10);
            obj['total'] = parseInt(totalActiveIndia.deaths, 10);
            refinedData.push(obj);
        });
    } else if(type === 'recovered') {
        recoveredData.forEach(element => {
            let obj = {};
            obj['state'] = element['state'];
            obj[type] = parseInt(element[type], 10);
            obj['total'] = parseInt(totalActiveIndia.recovered, 10);
            refinedData.push(obj);
        });
    }
    

    const handleTypeClick = (type, color) => {
        setType(type);

        let tempState = Object.assign({}, {
            'active': false,
            'recovered': false,
            'deaths': false
        });
        tempState[type] = 'true';
        setBtnState(tempState);
    }

    console.log('StateIndiaMostActive refinedData', refinedData);

    return (
        <Card>
            <Card.Body>
                <Card.Title>State: Most {type} cases spreads</Card.Title>
                <div className="type-btn-grp">
                    <ButtonGroup aria-label="Basic example">
                        <Button
                            variant="secondary"
                            className={btnState.active ? 'selected' : null}
                            onClick={e => handleTypeClick('active', '#FFC107')}>
                            Active
                    </Button>
                        <Button
                            variant="secondary"
                            className={btnState.recovered ? 'selected' : null}
                            onClick={e => handleTypeClick('recovered', '#28A745')}>
                            Recovered
                                </Button>
                        <Button
                            variant="secondary"
                            className={btnState.deaths ? 'selected' : null}
                            onClick={e => handleTypeClick('deaths', '#DC3545')}>
                            Deaths
                                </Button>
                    </ButtonGroup>
                </div>
                <Card.Subtitle className="mb-2 text-muted">
                    Top {TOP_N} states with Most {type} cases spreads
                </Card.Subtitle>
                <RadarCovidChart radarData={refinedData} chartKey={type} top_n={TOP_N} />
            </Card.Body>
        </Card>
    );
};

export default StateIndiaMostRadialSpreads;