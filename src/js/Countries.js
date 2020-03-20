import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';

import FetchTimeSeries from './time-series/FetchTimeSeries';

const Countries = props => {

    const loading = props.countryCoronaDataLoading;
    const data = props.countryCoronaData;
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    const SORT_BY = 'cases';

    useEffect(() => {
        if (!loading) {
            let sorted = data.sort((a,b) => b[SORT_BY] - a[SORT_BY]);
            let mappedCountries = sorted.map(elem => {
                return elem.country
            })
            setCountries(mappedCountries);
            setFilteredCountries(mappedCountries);
            console.log('countries', countries);
        }
    }, [loading]);
    
    

    const handleFind = event => {
        event.preventDefault();
        console.log(event.target.value);
        let filtered = countries.filter(elem => {
            return elem.toLowerCase().includes(event.target.value.toLowerCase());
            
        });
        setFilteredCountries(filtered);
    }

    return(
        <div className="countries">
            {loading ? <h3>Loading...</h3> :
                <Container className="inner" fluid>
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
