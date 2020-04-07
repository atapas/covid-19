
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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

    let data = covid19Data.filter(elem => {
        return elem.country !== 'World';
    });

    let allCountries = data.sort((a,b) => b.cases - a.cases);

    const handleSelect = () => {
        setShow(false);
        update(checkedItems);
    }

    const handleCancel = () => {
        setShow(false);
        setCheckedItems(preSelected);
        // update(checkedItems);
    }

    const handleShow = () => setShow(true);

    const ALL_COUNTRIES = allCountries.map(elem => {
        return { 'name': elem.country };
    });

    // console.log('ALL_COUNTRIES', ALL_COUNTRIES);

    const handleChange = (event) => {
        let updated = { ...checkedItems, [event.target.name]: event.target.checked };
        let temp = JSON.parse(JSON.stringify(updated));
        // updating an object instead of a Map
        setCheckedItems(temp);
        // console.log("checkedItems: ", checkedItems);
    }

    
    return (
        <>
            <Button variant="success" onClick={handleShow} className="country-select">
                <i
                    title="Selecet Countries"
                    className="fas fa-edit fa-1x icon" />
            </Button>
            <Modal show={show} onHide={handleCancel} animation={true} className="select-country-modal"> 
                <Modal.Header closeButton>
                    <Modal.Title className="header">
                        <i className="fas fa-flag icon" />
                        Selecet Countries to Compare
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul className="content">
                        {
                            ALL_COUNTRIES.map(item => (
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