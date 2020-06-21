/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from 'react';
import Card from 'react-bootstrap/Card';
import RadarCovidChart from '../charts/RadarCovidChart';

const StateIndiaMostActive = props => {
    const data = props.data;
    const totalActiveIndia = props.total;
    console.log('StateIndiaMostActive data', data);
    const TOP_N = 10;
    let refinedData = [];
    data.forEach(element => {
        let obj = {};
        obj['state'] = element['state'];
        obj['active'] = parseInt(element['active'], 10);
        obj['total'] = totalActiveIndia;
        refinedData.push(obj);
    });

    console.log('StateIndiaMostActive refinedData', refinedData);

    return (
        <Card>
            <Card.Body>
                <Card.Title>State: Most Active Cases Spreads</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Top {TOP_N} states with Most Active Cases Spreads
                </Card.Subtitle>
                <RadarCovidChart radarData={refinedData} chartKey={'active'} top_n={TOP_N} />
            </Card.Body>
        </Card>
    );
};

export default StateIndiaMostActive;