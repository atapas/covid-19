/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from 'react';
import Card from 'react-bootstrap/Card';

const StateIndiaMostDeaths = props => {
    const data = props.data;

    return (
        <Card>
            <Card.Body>
                <Card.Title>State: Most Deaths</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    State with most number of Deaths
                </Card.Subtitle>
            </Card.Body>
        </Card>
    );
};

export default StateIndiaMostDeaths;