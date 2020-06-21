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
import StateIndiaMostActive from './covid-all/StateIndiaMostActive';

const IndiaStateCharts = props => {
    const stateData = props.data;

    const sortedMostActive = [...stateData].sort((a,b) => parseInt(b.active, 10) - parseInt(a.active, 10));
    const sortedMostDeath = [...stateData].sort((a,b) => parseInt(b.deaths, 10) - parseInt(a.deaths, 10));
    let stateDataWithPerctRecovered = stateData.map(elem => {
        elem['perctRecoverd'] = Math.round((elem['recovered'] * 100) / elem['confirmed']);
        elem['perctDeaths'] = Math.round((elem['deaths'] * 100) / elem['confirmed']);
        elem['perctActive'] = Math.round((elem['active'] * 100) / elem['confirmed']);
        return elem;
    });
    const sortedMostRecoveredPerct = stateDataWithPerctRecovered.sort((a,b) => b.active - a.active);
    const indiaTotalData = props.indiaTotalData;

    // console.log('indiaTotalData', indiaTotalData);

    return(
        <Container className="india-state-charts" fluid>
            <Row style={{marginBottom: '20px'}}>
                <Col sm={6}>
                    <StateIndiaMostActive data={sortedMostActive} total={indiaTotalData.active}/>
                </Col>
                <Col sm={6}>
                    <StateIndiaMostDeaths data={sortedMostDeath} total={indiaTotalData.deaths}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <StateIndiaMostRecovered data={sortedMostRecoveredPerct} />
                </Col>
            </Row>
            
        </Container>
    )
};

export default IndiaStateCharts;