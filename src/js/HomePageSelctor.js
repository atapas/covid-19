import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { useSelector } from 'react-redux';
import FetchTimeSeries from './time-series/FetchTimeSeries';




const HomePageSelector = ({ preSelected , update}) => {

    const country = preSelected;
    const [show, setShow] = useState(false);
    const [allCountries, setAllCountries] = useState([]);
    const covid19Data = useSelector(state => state.covid19);
    const [selectedCountry, setSelectedCountry] = useState({ [country] : true});
    const [countryName, setCountryName] = useState(country);
    const [filteredCountries, setFilteredCountries] = useState([]);

    const Checkbox = ({ type = 'radio', name, checked = false, onChange, className = 'regular-checkbox' }) => {
        return (<input type={type} name={name} checked={checked} onChange={onChange} className={className} />)
    };

    useEffect(() => {
        let data = covid19Data && covid19Data.filter(elem => {
            return elem.country !== 'World';
        });

        let sortedCountries = data.sort((a, b) => b.cases - a.cases);

        let allCountries = sortedCountries.map(elem => {
            return { 'name': elem.country };
        });
        setAllCountries(allCountries);
        setFilteredCountries(allCountries);

    }, []);


    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        let updated = { [event.target.name]: event.target.checked };
        setSelectedCountry(JSON.parse(JSON.stringify(updated)));
        setCountryName(event.target.name);
    }

    const handleFind = event => {
        event.preventDefault();
        let filtered = allCountries.filter(elem => {
            return elem.name.toLowerCase().includes(event.target.value.toLowerCase());

        });
        setFilteredCountries(filtered);
    }

    const handleCancel = () => {
        setShow(false);
        setSelectedCountry(country ? { [country] : true} : {});
        setFilteredCountries(allCountries);
    }

    const updateLocalStore = () => {
        update(countryName);
        setShow(false);
        setFilteredCountries(allCountries);
    };

    return (<>
    <Button style={{ 'marginLeft': '10px' }} variant="success" onClick={handleShow} className="country-select">
                            <i
                                title="Select home country"
                                className="fas fa-edit fa-1x icon" />
                        </Button>
        <Modal show={show} onHide={handleCancel} animation={true} className="select-country-modal">
            <Modal.Header closeButton>
                <Modal.Title className="header">
                    <i className="fas fa-flag icon" />
                        Select Your Home Country
                    </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <ul className="content">
                    <FormControl
                        type="text"
                        placeholder="Filter by Country Name"
                        className="mr-sm-2"
                        onChange={event => handleFind(event)}
                        className="filterbox" />
                    {
                        filteredCountries.map(item => (
                            <li key={item.name}>
                                <FetchTimeSeries country={item.name} size='16' />
                                <div style={{ float: 'left', marginRight: '9px' }}>
                                    <Checkbox
                                        name={item.name}
                                        checked={selectedCountry && selectedCountry[item.name]}
                                        onChange={handleChange}
                                    />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCancel} >
                    Cancel
                    </Button>
                <Button variant="primary" onClick={updateLocalStore}>
                    Select
                    </Button>
            </Modal.Footer>
        </Modal>
    </>);


};


export default HomePageSelector;