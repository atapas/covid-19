
import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import WorldData from './covid-all/WorldData';
import FetchTimeSeries from './time-series/FetchTimeSeries';

const Home = () => {

    return(
        <Container className="Home" fluid>
            <Row>
                <Col sm={4}>
                    <WorldData />
                </Col>
                <Col sm={8}>
                    <div >
                        <FetchTimeSeries country='Japan' />
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
};

export default Home;