/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Country from './Country';

const Home = props => {
     return(
        <Container className="Home" fluid>
            <Row className="countryHeadline">
                <Col sm={12}>
                    <Country countryName="India" />
                </Col>
            </Row>
        </Container>
    )
};

export default Home;