import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { useSelector } from 'react-redux';
import FetchTimeSeries from './time-series/FetchTimeSeries';




const HomePageSelector = (props) => {

    const [show, setShow] = useState(props.show);
    const [allCountries, setAllCountries] = useState([]);
    const covid19Data = useSelector(state => state.covid19);
    const [selectedCountry, setSelectedCountry] = useState();
    const [countryName, setCountryName] = useState();
    const [filteredCountries, setFilteredCountries] = useState([]);

    const Checkbox = ({ type = 'radio', name, checked = false, onChange, className = 'regular-checkbox' }) => {
        return (<input type={type} name={name} checked={checked} onChange={onChange} className={className} />)
    };

    useEffect(() => {
        let data = covid19Data.filter(elem => {
            return elem.country !== 'World';
        });

        let sortedCountries = data.sort((a, b) => b.cases - a.cases);

        let allCountries = sortedCountries.map(elem => {
            return { 'name': elem.country };
        });
        setAllCountries(allCountries);
        setFilteredCountries(allCountries);

    }, []);


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
        setSelectedCountry({});
        setFilteredCountries(allCountries);
    }

    const updateLocalStore = () => {
        console.log(countryName);
        localStorage.setItem('countryName', countryName);
        setShow(false);
        setFilteredCountries(allCountries);
        if (props.history) {
            props.history.push(`/`);
        }
    };

    return (<>
        <Modal show={show} onHide={handleCancel} animation={true} className="select-country-modal">
            <Modal.Header closeButton>
                <Modal.Title className="header">
                    <i className="fas fa-flag icon" />
                        Select a Country you want to be landed always
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