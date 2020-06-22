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
    const [type, setType] = useState('confirmed');
    const [btnState, setBtnState] = useState({
        'confirmed': true,
        'active': false,
        'recovered': false,
        'deaths': false
    });
    const stateData = props.stateData;
    const totalActiveIndia = props.total;
    const TOP_N = 12;

    let refinedData = [];
    const sortedMostType = [...stateData].sort((a, b) => parseInt(b[type], 10) - parseInt(a[type], 10));
    sortedMostType.forEach(element => {
        let obj = {};
        obj['state'] = element['state'];
        obj[type] = parseInt(element[type], 10);
        obj['total'] = parseInt(totalActiveIndia[type], 10);
        refinedData.push(obj);
    });

    const handleTypeClick = (type, color) => {
        setType(type);

        let tempState = Object.assign({}, {
            'confirmed': false,
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
                            className={btnState.confirmed ? 'selected' : null}
                            onClick={e => handleTypeClick('confirmed', '#17A2B8')}>
                            Confirmed
                        </Button>
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