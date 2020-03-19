
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const TopNRecoveredWidget = props => {
    const loading = props.loading;
    const data = props.data;
    // console.log('from TopNRecoveredWidget', loading, data);

    return (
        <div className="top-n-recovered-widget">
            <Card >
                <Card.Body>
                    <Card.Title>Top N Countries Recovered Well</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Number of Countries: 5</Card.Subtitle>
                    <div>
                        {loading ? <h3>Loading...</h3> :<h1>TopNRecoveredWidget</h1>}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
};

export default TopNRecoveredWidget;