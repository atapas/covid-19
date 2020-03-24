
import React from "react";
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useFetch } from './useFetch';

import OverAllWidget from './covid-all/OverAllWidget';
import TopNDeathWidget from './covid-all/TopNDeathWidget';
import TopNRecoveredWidget from './covid-all/TopNRecoveredWidget';
import TopNTodayDeath from './covid-all/TopNTodayDeath';
import CountryCasesWidget from './covid-all/CountryCasesWidget';
import Country from './Country';

import world from '../../assets/images/world.png';

const Home = props => {
    const registeredCovid19Data = useSelector(state => state.covid19);
    const [allData, allDataLoading] = useFetch(
        "https://corona.lmao.ninja/all"
    );
    console.log('registeredCovid19Data', registeredCovid19Data);
    
    return(
        <Container className="Home" fluid>
            <Row className="countryHeadline">
                <Col sm={12}>
                    <Country countryName="India" />
                </Col>
            </Row>
            <Row className="worldHeading">
                <Col>
                    <h1>
                        <img 
                            src={world} 
                            height="64px"
                            width="64px"
                            alt="World"
                            className="world"/>
                        World
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <TopNDeathWidget data={registeredCovid19Data}/>
                </Col>
                <Col sm={6}>
                    <TopNRecoveredWidget data={registeredCovid19Data}/>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <OverAllWidget loading={allDataLoading} data={allData}/>
                </Col>
                <Col sm={6}>
                    <TopNTodayDeath data={registeredCovid19Data}/>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <CountryCasesWidget data={registeredCovid19Data}/>
                </Col>
            </Row>
        </Container>
        
    )
};

export default Home;