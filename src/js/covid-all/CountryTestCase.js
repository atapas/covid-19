import React from "react";
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import {
    ResponsiveContainer, 
    BarChart, 
    Bar, 
    Cell, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip,
    Label,
    LabelList
} from 'recharts';
import {reactLocalStorage} from 'reactjs-localstorage';
import CurrencyFormat from 'react-currency-format';


let randomColor = require('randomcolor');

const CountryTestCase = () => {

    const countryNameFromStorage = reactLocalStorage.getObject('country_selection');
    
    const MY_COUNTRY = Object.keys(countryNameFromStorage).length > 0 ? 
                        countryNameFromStorage : 
                        'India';

    const SUCCESS_COLOR_SHADES = randomColor({
        count: 11,
        luminosity: 'bright',
        hue: 'random'
    });

    const covid19Data = useSelector(state => state.covid19);
    
    let countryData = covid19Data.map(({ country, tests, cases, perct }) => ({ country, tests, cases })).filter(elem => {
        return (elem.tests > 0 || elem.country === 'World')
    });
    countryData.map(elem => {
        let calc = elem['cases'] * 100 / elem['tests'];
        elem['perct'] = calc.toFixed(2);
        return elem;
    });

    let sortedData = countryData.sort((a, b) => b.cases - a.cases);
    let cloned = JSON.parse(JSON.stringify(sortedData));
    let topNData = cloned.splice(0, 9);

    const foundMyCountry = topNData.filter(elem => {
        return elem.country === MY_COUNTRY;
    });

    if (foundMyCountry.length === 0) {
        topNData.push(countryData.filter(elem => {
            return elem.country === MY_COUNTRY
        })[0]);
    }

    let refinedData = [];
    topNData.forEach(element => {
        let obj = {};
        obj['country'] = element['country'];
        obj['% Positive'] = element['perct'];
        obj['cases'] = element['cases'];
        obj['tests'] = element['tests'];
        refinedData.push(obj);
    });

    const maxDomain = Math.round(topNData.sort((a, b) => b.perct - a.perct)[0]['perct']) + 20

    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].payload.country}`}</p>
                    <div className="intro">
                        <CurrencyFormat
                            value={payload[0].payload.tests}
                            displayType={'text'}
                            thousandSeparator={true}
                            renderText={value => 
                                <div className="value">
                                    {`Total Tests Done: ${value}`}
                                </div>}
                        />

                        <CurrencyFormat
                            value={payload[0].payload.cases}
                            displayType={'text'}
                            thousandSeparator={true}
                            renderText={value => 
                                <div className="value">
                                    {`Total Cases: ${value}`}
                                </div>}
                        />

                        <CurrencyFormat
                            value={payload[0].payload['% Positive']}
                            displayType={'text'}
                            thousandSeparator={true}
                            renderText={value => 
                                <div className="value">
                                    {`Cases vs Tests (%Positive): ${value}%`}
                                </div>}
                        /> 
                    </div>
                </div>
            );
        }

        return null;
    };

    const renderCustomizedLabel = (props) => {
        const { x, y, width, height, value } = props;
        const radius = 23;

        return (
            <g>
                <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#FFF" />
                <text x={x + width / 2} y={y - radius} fill="#000" textAnchor="middle" dominantBaseline="middle">
                    {value}%
                </text>
            </g>
        );
    };

    return (
        <div className="country-test-cases-widget">
            <Card >
                <Card.Body>
                    <Card.Title>Country Tests vs Positive</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Percentage of Postive Cases Compared to the Test done.</Card.Subtitle>
                    <div>
                        <ResponsiveContainer width='100%' height={330}>
                            <BarChart
                                data={refinedData}
                                margin={{
                                    top: 30, right: 0, left: 0, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="country" >
                                    <Label value="Country" offset={-3} position="insideBottom" />
                                </XAxis>
                                <YAxis type="number" domain={[0, maxDomain]} label={{ value: '% Positive over Tests', angle: -90, position: 'insideLeft' }}/>
                                <Tooltip content={<CustomTooltip />} />
                                
                                <Bar dataKey="% Positive">
                                    {
                                        refinedData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={SUCCESS_COLOR_SHADES[index % 20]} />
                                        ))
                                    }
                                    <LabelList dataKey="% Positive" position="top" content={renderCustomizedLabel} />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default CountryTestCase;