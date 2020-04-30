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

    const countryName = localStorage.getItem('countryName');
     return(
        <>
        <Container className="Home" fluid>
            <Row className="countryHeadline">
                <Col sm={12}>
                    <Country history={props.history} countryName={ countryName ? countryName : 'India' } />
                </Col>
            </Row>
        </Container>
    </>
    )
};

export default Home;