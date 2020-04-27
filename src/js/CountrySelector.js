
/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { useSelector } from 'react-redux';

import FetchTimeSeries from './time-series/FetchTimeSeries';

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange, className = 'regular-checkbox' }) => {
    // console.log("Checkbox: ", name, checked);
    return (<input type={type} name={name} checked={checked} onChange={onChange} className={className} />)
}

const CountrySelector = ({ preSelected , update}) => {
    const [checkedItems, setCheckedItems] = useState(preSelected);
    const [show, setShow] = useState(false);
    const covid19Data = useSelector(state => state.covid19);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [allCountries, setAllCountries] = useState([]);

    useEffect(() => {
        let data = covid19Data.filter(elem => {
            return elem.country !== 'World';
        });
    
        let sortedCountries = data.sort((a,b) => b.cases - a.cases);
        
        let allCountries = sortedCountries.map(elem => {
            return { 'name': elem.country };
        });
        setAllCountries(allCountries);
        setFilteredCountries(allCountries);
        // console.log('allCountries', allCountries);
    
    }, []);
   
    const handleSelect = () => {
        setShow(false);
        setFilteredCountries(allCountries);
        update(checkedItems);
    }

    const handleCancel = () => {
        setShow(false);
        setCheckedItems(preSelected);
        setFilteredCountries(allCountries);
        // update(checkedItems);
    }

    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        let updated = { ...checkedItems, [event.target.name]: event.target.checked };
        let temp = JSON.parse(JSON.stringify(updated));
        // updating an object instead of a Map
        setCheckedItems(temp);
        // console.log("checkedItems: ", checkedItems);
    }

    const handleFind = event => {
        event.preventDefault();
        console.log(event.target.value);
        let filtered = allCountries.filter(elem => {
            return elem.name.toLowerCase().includes(event.target.value.toLowerCase());
            
        });
        setFilteredCountries(filtered);
    }

    
    return (
        <>
            <Button variant="success" onClick={handleShow} className="country-select">
                <i
                    title="Select Countries"
                    className="fas fa-edit fa-1x icon" />
            </Button>
            <Modal show={show} onHide={handleCancel} animation={true} className="select-country-modal"> 
                <Modal.Header closeButton>
                    <Modal.Title className="header">
                        <i className="fas fa-flag icon" />
                        Select Countries to Compare
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul className="content">
                    <FormControl 
                            type="text" 
                            placeholder="Filter by Country Name" 
                            className="mr-sm-2"
                            onChange={event => handleFind(event)} 
                            className="filterbox"/>
                        {
                            filteredCountries.map(item => (
                                <li key={item.name}>
                                    <FetchTimeSeries  country={item.name} size='16' />
                                    <div style={{float: 'left', marginRight: '9px'}}>
                                        <Checkbox 
                                            name={item.name} 
                                            checked={checkedItems[item.name]} 
                                            onChange={handleChange} />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSelect} >
                        Select
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
};

export default CountrySelector;