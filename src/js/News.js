/*
 * Created on Sun Apr 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns';

import covid_image from '../../assets/images/covid.png';

import * as topHeadlines from './utils/top-headlines.json';

const Information = () => {
    const API_KEY = '09037b156f3e4b27b044ef4c8fd44aaa';
    const URL = `http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${API_KEY}`;

    const data = topHeadlines.articles;
    console.log('data', data);

    return (
        <div className="information">
            <Container className="heading">
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h2>
                            <img
                                alt={covid_image}
                                src={covid_image}
                                width="120"
                                height="120"
                                className="logo"
                            />
                            COVID-19 News
                        </h2>
                    </Col>
                </Row>
            </Container>
            
            <CardColumns className="news">
                {data.map((info, index) =>
                        <Card key={index}>
                            <Card.Img variant="top" src={info.urlToImage} />
                            <Card.Body>
                                <Card.Title>{info.title}</Card.Title>
                                <Card.Text>
                                    {info.description}
                                </Card.Text>
                                <Card.Link target="_blank" href={info.url}>Read More..</Card.Link>
                            </Card.Body>
                        </Card>
                )}
            </CardColumns>
        </div>
    )
};

export default Information;