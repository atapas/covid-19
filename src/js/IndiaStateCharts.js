/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import StateIndiaRecoveryProgress from './covid-all/StateIndiaRecoveryProgress';
import StateIndiaMostRadialSpreads from './covid-all/StateIndiaMostRadialSpreads';

const IndiaStateCharts = props => {
    
    const stateData = props.data;
    
    let stateDataWithPerctRecovered = stateData.map(elem => {
        elem['perctRecoverd'] = Math.round((elem['recovered'] * 100) / elem['confirmed']);
        elem['perctDeaths'] = Math.round((elem['deaths'] * 100) / elem['confirmed']);
        elem['perctActive'] = Math.round((elem['active'] * 100) / elem['confirmed']);
        return elem;
    });
    const sortedMostRecoveredPerct = stateDataWithPerctRecovered.sort((a, b) => b.active - a.active);
    const indiaTotalData = props.indiaTotalData;

    

    // console.log('indiaTotalData', indiaTotalData);

    return (
        <Container className="india-state-charts" fluid>
            <Row style={{ marginBottom: '20px' }}>
                <Col>
                    <StateIndiaRecoveryProgress 
                        data={sortedMostRecoveredPerct} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <StateIndiaMostRadialSpreads 
                        stateData={stateData}
                        total={indiaTotalData} />
                </Col>
            </Row>
        </Container>
    )
};

export default IndiaStateCharts;