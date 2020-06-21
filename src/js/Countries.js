import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import FormControl from 'react-bootstrap/FormControl';
import FetchTimeSeries from './time-series/FetchTimeSeries';

const Countries = props => {

    const covid19Data = useSelector(state => state.covid19);
    let data = covid19Data.filter(elem => {
        return elem.country !== 'World';
    });
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [sortBy, setSortBy] = useState('active');

    // const SORT_BY = 'cases';

    useEffect(() => {
        let sorted = data.sort((a,b) => b[sortBy] - a[sortBy]);
        let mappedCountries = sorted.map(elem => {
            return elem.country
        })
        setCountries(mappedCountries);
        setFilteredCountries(mappedCountries);
    }, [sortBy]);
    
    

    const handleFind = event => {
        event.preventDefault();
        let filtered = countries.filter(elem => {
            return elem.toLowerCase().includes(event.target.value.toLowerCase());
            
        });
        setFilteredCountries(filtered);
    }

    const handleSelect = event => {
        let selectedSortVal = event.target.value;
        if ( selectedSortVal == 'Active') {
            setSortBy('active');
        }else if ( selectedSortVal == 'Total') {
            setSortBy('cases');
        }else if ( selectedSortVal == 'Recovery') {
            setSortBy('recovered');
        }else if ( selectedSortVal == 'Deaths') {
            setSortBy('deaths');
        }else if ( selectedSortVal == 'New Cases') {
            setSortBy('todayCases');
        }else if ( selectedSortVal == 'New Deaths') {
            setSortBy('todayDeaths');
        }
    }

    return(
        <div className="countries">
            <Container className="inner" fluid>
                <Row className="sort-by">
                    <Col>
                        <Form inline>
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>Sorted By: </Form.Label>
                                <Form.Control as="select" custom="true" onChange={event => handleSelect(event)} style={{cursor:'pointer'}}>
                                    <option>Active</option>
                                    <option>Recovery</option>
                                    <option>Deaths</option>
                                    <option>New Cases</option>
                                    <option>New Deaths</option>
                                    <option>Total</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className="justify-content-md-center search">
                    <Col xs lg="6">
                        <FormControl 
                            type="text" 
                            placeholder="Filter by Country Name" 
                            className="mr-sm-2"
                            onChange={event => handleFind(event)} />
                    </Col>
                </Row>
                <Row>
                    {filteredCountries.map((country) =>
                        <Col key={country} sm={3}>
                            <FetchTimeSeries  country={country} history={props.history}/>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
       
    )
};

export default Countries;
