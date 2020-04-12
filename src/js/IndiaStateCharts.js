/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import StateIndiaMostConfirmed from './covid-all/StateIndiaMostConfirmed';
import StateIndiaMostDeaths from './covid-all/StateIndiaMostDeaths';
import StateIndiaMostRecovered from './covid-all/StateIndiaMostRecovered';

const IndiaStateCharts = props => {
    const stateData = props.data;

    const sortedMostConfirmed = [...stateData].sort((a,b) => parseInt(b.active, 10) - parseInt(a.active, 10));
    const sortedMostDeath = [...stateData].sort((a,b) => parseInt(b.deaths, 10) - parseInt(a.deaths, 10));
    let stateDataWithPerctRecovered = stateData.map(elem => {
        elem['perctRecoverd'] = Math.round((elem['recovered'] * 100) / elem['confirmed']);
        return elem;
    });
    const sortedMostRecoveredPerct = stateDataWithPerctRecovered.sort((a,b) => b.perctRecoverd - a.perctRecoverd);

    console.group('IndiaStateCharts');
    console.groupCollapsed();
    console.log('stateData', stateData);
    console.log('sortedMostConfirmed', sortedMostConfirmed);
    console.log('sortedMostDeath', sortedMostDeath);
    console.log('sortedMostRecoveredPerct', sortedMostRecoveredPerct);
    console.groupEnd();

    return(
        <Container className="india-state-charts" fluid>
            <Row>
                <Col sm={8}>
                    <StateIndiaMostConfirmed data={sortedMostConfirmed} />
                </Col>
                <Col sm={4}>
                    <StateIndiaMostRecovered data={sortedMostRecoveredPerct} />
                </Col>
                {/*
                <Col>
                    <StateIndiaMostDeaths data={sortedMostDeath} />
                </Col>
                */}
            </Row>
        </Container>
    )
};

export default IndiaStateCharts;