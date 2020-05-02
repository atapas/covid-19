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

import {reactLocalStorage} from 'reactjs-localstorage';

const Home = props => {

    const countryNameFromStorage = reactLocalStorage.getObject('country_selection');
    
    let countryName = Object.keys(countryNameFromStorage).length > 0 ? 
                        countryNameFromStorage : 
                        'India';
     return(
        <>
        <Container className="Home" fluid>
            <Row className="countryHeadline">
                <Col sm={12}>
                    <Country countryName={ countryName } />
                </Col>
            </Row>
        </Container>
    </>
    )
};

export default Home;