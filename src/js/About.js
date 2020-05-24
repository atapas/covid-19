/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import i18n from 'i18n-web';

const About = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="about">
          <Button className="link" variant="link" onClick={handleShow}>
            {i18n('about.header')}
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{i18n('about.header')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2>🙏 {i18n('about.stayHomeStaySafe')} 🙏</h2>
                <br />
                <p>
                    {i18n('about.motivation')} 😏
                    <br />
                    My sincere thanks to followings 👍:
                    <ul>
                        <li>
                            <a href="https://corona.lmao.ninja/docs/" target="_blank">
                                Coronavirus Ninja API
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/pomber/covid19/" target="_blank">
                                Corona timeseries API
                            </a>
                        </li>
                        <li>
                            <a href="https://api.covid19india.org/" target="_blank">
                                Corona State Data(India)
                            </a>
                        </li>
                        <li>
                            <a href="https://saurav.tech/NewsAPI/top-headlines/category/health/in.json" target="_blank">
                                API for News
                            </a>
                        </li>
                    </ul>
                    <br />
                    <h3>💻 Technologies 💻</h3>
                    <p>
                        This app is built from the scratch using following User Interface Technologies:
                        <ul>
                            <li>
                                <a href="https://reactjs.org/" target="_blank">ReactJs</a>
                            </li>
                            <li>
                                <a href="https://react-bootstrap.netlify.com/" target="_blank">Bootstrap</a>
                            </li>
                            <li>
                                <a href="http://recharts.org/en-US/" target="_blank">Recharts</a>
                            </li>
                            <li>
                                <a href="http://netlify.com/" target="_blank">Hosted on Netlify</a>
                            </li>
                        </ul>
                    </p>
                    <br />
                    <a href="https://www.tapasadhikary.com" target="_blank">
                    Contact me
                    </a> for any further questions.
                </p>
            </Modal.Body>
          </Modal>
        </div>
    );
};

export default About;