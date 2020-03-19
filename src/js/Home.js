
import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useFetch } from './useFetch';

import OverAllWidget from './covid-all/OverAllWidget';
import TopNDeathWidget from './covid-all/TopNDeathWidget';
import TopNRecoveredWidget from './covid-all/TopNRecoveredWidget';

const Home = () => {
    const [allData, allDataLoading] = useFetch(
        "https://corona.lmao.ninja/all"
    );
    const [countryData, countryDataLoading] = useFetch(
        "https://corona.lmao.ninja/countries"
    );
    // console.log(countryData);
    return(
        <Container className="Home" fluid>
            <Row>
                <Col sm={4}>
                    <OverAllWidget loading={allDataLoading} data={allData}/>
                </Col>
                <Col sm={4}>
                    <TopNDeathWidget loading={countryDataLoading} data={countryData}/>
                </Col>
                <Col sm={4}>
                    <TopNRecoveredWidget loading={countryDataLoading} data={countryData}/>
                </Col>
            </Row>
        </Container>
        
    )
};

export default Home;