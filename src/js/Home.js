
import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useFetch } from './useFetch';

import OverAllWidget from './covid-all/OverAllWidget';
import TopNDeathWidget from './covid-all/TopNDeathWidget';
import TopNRecoveredWidget from './covid-all/TopNRecoveredWidget';

const Home = props => {
    const [allData, allDataLoading] = useFetch(
        "https://corona.lmao.ninja/all"
    );
    
    // console.log(countryData);
    return(
        <Container className="Home" fluid>
            <Row>
                <Col sm={4}>
                    <OverAllWidget loading={allDataLoading} data={allData}/>
                </Col>
                <Col sm={8}>
                    <TopNDeathWidget loading={props.countryDataLoading} data={props.countryData}/>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <TopNRecoveredWidget loading={props.countryDataLoading} data={props.countryData}/>
                </Col>
            </Row>
        </Container>
        
    )
};

export default Home;