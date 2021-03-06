/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from 'react';
import Card from 'react-bootstrap/Card';
import RadarCovidChart from '../charts/RadarCovidChart';

const StateIndiaMostDeaths = props => {
    const data = props.data;
    const totalDeathIndia = props.total;
    console.log('StateIndiaMostDeaths data', data);
    const TOP_N = 10;
    let refinedData = [];
    data.forEach(element => {
        let obj = {};
        obj['state'] = element['state'];
        obj['deaths'] = parseInt(element['deaths'], 10);
        obj['total'] = totalDeathIndia;
        refinedData.push(obj);
    });

    console.log('StateIndiaMostDeaths refinedData', refinedData);

    return (
        <Card>
            <Card.Body>
                <Card.Title>State: Most Death Cases Spreads</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Top {TOP_N} states with Most Death Cases Spreads
                </Card.Subtitle>
                <RadarCovidChart radarData={refinedData} chartKey={'deaths'} top_n={TOP_N} />
            </Card.Body>
        </Card>
    );
};

export default StateIndiaMostDeaths;