
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import covid_image from '../../assets/images/covid.png';

const Information = () => {
    return (
        <div className="information" >
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
                            COVID-19 Information
                        </h2>
                    </Col>
                </Row>
            </Container>
            <Container className="toc">
                <Row className="justify-content-md-left">
                    <Col>
                        <ul>
                            <li>
                                <a href="#corona_covid19">Introduction</a>
                            </li>
                            <li>
                                <a href="#sars_cov_diff">Difference with SARS-COV-2</a>
                            </li>
                            <li>
                                <a href="#symptoms">Symptoms</a>
                            </li>
                            <li>
                                <a href="#spreading">Spreading</a>
                            </li>
                            <li>
                                <a href="#risk">Risk</a>
                            </li>
                            <li>
                                <a href="#protection">Protection</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container fluid >
                <Row id="corona_covid19">
                    <Col>
                        <h3>👉 Coronavirus & COVID-19</h3>
                        <p>
                            Coronaviruses are a large family of viruses which may cause illness in animals or humans. In humans,
                            several coronaviruses are known to cause respiratory infections ranging from the common cold to
                            more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory
                            Syndrome (SARS). The most recently discovered coronavirus causes coronavirus disease COVID-19.
                        </p>
                        <p>
                            COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus
                            and disease were unknown before the outbreak began in Wuhan, China, in December 2019.
                        </p>
                    </Col>
                </Row>
                <Row id="sars_cov_diff">
                    <Col>
                        <h3>👉 Difference with SARS-COV-2</h3>
                        <p>
                            The virus that causes COVID-19 and the one that caused the outbreak of Severe Acute Respiratory Syndrome (SARS) in 2003 are related to each other genetically, but the diseases they cause are quite different.
                        </p>
                        <p>
                            SARS was more deadly but much less infectious than COVID-19. There have been no outbreaks of SARS anywhere in the world since 2003.
                        </p>
                    </Col>
                </Row>
                <Row id="symptoms">
                    <Col>
                        <h3>👉 Symptoms</h3>
                        <p>
                            The most common symptoms of COVID-19 are fever, tiredness, and dry cough.
                        </p>
                        <p>
                            Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhoea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop serious illness.<br />
                            People with fever, cough and difficulty breathing should seek medical attention.
                        </p>
                    </Col>
                </Row>
                <Row id="spreading">
                    <Col>
                        <h3>👉 Spreading</h3>
                        <p>
                            People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth.
                        </p>
                        <p>
                            People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick.
                        </p>
                    </Col>
                </Row>
                <Row id="risk">
                    <Col>
                        <h3>👉 Risk</h3>
                        <p>
                            The risk depends on where you are - and more specifically, whether there is a COVID-19 outbreak unfolding there.
                        </p>
                        <p>
                            There are several places around the world (cities or areas) where the disease is spreading. For people living in, or visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce your risk of catching or spreading COVID-19.
                        </p>
                        <p>
                            COVID-19 outbreaks can be contained and transmission stopped, as has been shown in China and some other countries. Unfortunately, new outbreaks can emerge rapidly. It’s important to be aware of the situation where you are or intend to go.
                        </p>
                    </Col>
                </Row>
                <Row id="protection">
                    <Col>
                        <h3>👉 Protection</h3>
                        <p>
                            Many countries around the world have seen cases of COVID-19 and several have seen outbreaks. Authorities in China and some other countries have succeeded in slowing or stopping their outbreaks. However, the situation is unpredictable so check regularly for the latest and authentic news.
                        </p>
                        <p>
                            You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:
                            <ul>
                                <li>
                                    Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.
                                </li>
                                <li>
                                    Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing. When someone coughs or sneezes, they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.
                                </li>
                                <li>
                                    Avoid touching eyes, nose and mouth. Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.
                                </li>
                                <li>
                                    Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately. Droplets spread virus. By following good respiratory hygiene, you protect the people around you from viruses such as cold, flu and COVID-19.
                                </li>
                                <li>
                                    Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority. National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.
                                </li>
                                <li>
                                    Keep up to date on the latest COVID-19 hotspots (cities or local areas where COVID-19 is spreading widely). If possible, avoid traveling to places – especially if you are an older person or have diabetes, heart or lung disease. You have a higher chance of catching COVID-19 in one of these areas.
                                </li>
                            </ul>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Information;