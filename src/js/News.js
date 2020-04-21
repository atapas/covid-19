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

import {useFetch} from "./useFetch";
import Loader from "react-loader-spinner";

const Information = () => {
    let data = [];
    const [topHeadlines, loadingTopHeadlines] = useFetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")

    if (!loadingTopHeadlines) {
        data = topHeadlines.articles
    }
    return (
        <div className="information">
            {
                loadingTopHeadlines ?
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    /> :
                    <div>
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
                                    <Card.Img variant="top" src={info.urlToImage}/>
                                    <Card.Body>
                                        <Card.Title>
                                            <Card.Link target="_blank" href={info.url}>{info.title}</Card.Link>
                                        </Card.Title>
                                        <Card.Text>
                                            {info.description}
                                        </Card.Text>
                                        <Card.Link target="_blank" href={info.url}>Read More..</Card.Link>
                                    </Card.Body>
                                </Card>
                            )}
                        </CardColumns>
                    </div>
            }
        </div>
    )
};

export default Information;
