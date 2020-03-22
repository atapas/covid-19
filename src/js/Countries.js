import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Loader from 'react-loader-spinner';
import FetchTimeSeries from './time-series/FetchTimeSeries';

const Countries = props => {

    const loading = props.countryCoronaDataLoading;
    const data = props.countryCoronaData;
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [sortBy, setSortBy] = useState('cases');

    // const SORT_BY = 'cases';

    useEffect(() => {
        if (!loading) {
            let sorted = data.sort((a,b) => b[sortBy] - a[sortBy]);
            let mappedCountries = sorted.map(elem => {
                return elem.country
            })
            setCountries(mappedCountries);
            setFilteredCountries(mappedCountries);
            console.log('countries', countries);
        }
    }, [loading, sortBy]);
    
    

    const handleFind = event => {
        event.preventDefault();
        console.log(event.target.value);
        let filtered = countries.filter(elem => {
            return elem.toLowerCase().includes(event.target.value.toLowerCase());
            
        });
        setFilteredCountries(filtered);
    }

    const handleSelect = event => {
        let selectedSortVal = event.target.value;
        console.log(selectedSortVal);
        if ( selectedSortVal == 'Total Cases') {
            setSortBy('cases');
        }else if ( selectedSortVal == 'Recovery') {
            setSortBy('recovered');
        }else if ( selectedSortVal == 'Total Deaths') {
            setSortBy('deaths');
        }else if ( selectedSortVal == 'New Cases') {
            setSortBy('todayCases');
        }else if ( selectedSortVal == 'New Deaths') {
            setSortBy('todayDeaths');
        }
    }

    return(
        <div className="countries">
            {loading ? 
                <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={100}
                    width={100}
                /> :
                <Container className="inner" fluid>
                    <Row className="sort-by">
                        <Col>
                            <Form inline>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Label>Sorted By: </Form.Label>
                                    <Form.Control as="select" custom="true" onChange={event => handleSelect(event)}>
                                    <option>Total Cases</option>
                                    <option>Total Deaths</option>
                                    <option>Recovery</option>
                                    <option>New Cases</option>
                                    <option>New Deaths</option>
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
            }
        </div>
       
    )
};

export default Countries;
