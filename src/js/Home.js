/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import countries from '../js/utils/countryMapFile';
import Country from './Country';

/**
 * This method will fetch the country name for the countryMapFile based on the browser locale.
 */
const getCountryName = () => {

    const browserLanguage = navigator.language;
    if (countries[browserLanguage]) {
        return countries[browserLanguage];
    }
    return 'India';
};

const Home = props => {

    const countryName = getCountryName();
     return(
        <Container className="Home" fluid>
            <Row className="countryHeadline">
                <Col sm={12}>
                    <Country countryName={countryName} />
                </Col>
            </Row>
        </Container>
    )
};

export default Home;