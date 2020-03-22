
import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import Card from 'react-bootstrap/Card';
import Loader from 'react-loader-spinner';

const CountryCasesWidget = props => {
    const loading = props.loading;
    const data = props.data;
    const TOP_N = 10;
    const AMBER_COLOR_SHADES = [
        "rgba(255, 193, 7, 1.0)",
        "rgba(255, 193, 7, 0.9)",
        "rgba(255, 193, 7, 0.85)",
        "rgba(255, 193, 7, 0.8)",
        "rgba(255, 193, 7, 0.75)",
        "rgba(255, 193, 7, 0.7)",
        "rgba(255, 193, 7, 0.65)",
        "rgba(255, 193, 7, 0.6)",
        "rgba(255, 193, 7, 0.55)",
        "rgba(255, 193, 7, 0.5)",
        "rgba(255, 193, 7, 0.45)",
        "rgba(255, 193, 7, 0.4)",
        "rgba(255, 193, 7, 0.35)",
        "rgba(255, 193, 7, 0.3)",
        "rgba(255, 193, 7, 0.2)"
    ];

    let refinedData = [];
    if (!loading) {
        // console.log('from TopNRecoveredWidget', data);
        let sortedData = data.sort((a, b) => b.cases - a.cases);
        // console.log('sortedData', sortedData);
        let cloned = JSON.parse(JSON.stringify(sortedData));
        let topNData = cloned.splice(0, TOP_N);
        // console.log('topNData', topNData);
        topNData.forEach(element => {
            let obj = {};
            obj['Country'] = element['country'];
            obj['Cases'] = element['cases'];
            obj['Recovered'] = element['recovered'];
            obj['Deaths'] = element['deaths'];
            refinedData.push(obj);
        });
        console.log('CountryCasesWidget refinedData', refinedData);
    }

    return(
        <div className="country-all-data-widget">
            <Card >
                <Card.Body>
                    <Card.Title>Major Country Spreads</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Number of Countries: <b>{TOP_N}</b></Card.Subtitle>
                    <div>
                        {loading ? 
                            <Loader
                                type="ThreeDots"
                                color="#00BFFF"
                                height={100}
                                width={100}
                            />  :
                            <div>
                            <AreaChart width={950} height={400} data={refinedData}
                                    margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="Country"/>
                                <YAxis/>
                                <Tooltip/>
                                <Area type='monotone' dataKey='Cases' stackId="1" stroke='#FFC107' fill='#FFC107' />
                                
                            </AreaChart>
                            </div>}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default CountryCasesWidget;