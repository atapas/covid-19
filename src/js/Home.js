
import React from "react";

import FetchTimeSeries from './time-series/FetchTimeSeries';

const Home = () => {

    return(
        <div className="Home">
            <FetchTimeSeries country='Japan' />
        </div>
    )
};

export default Home;