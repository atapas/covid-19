
/*
 * Created on Sun Apr 13 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
 */

import React from 'react';

import * as github from '../../assets/images/github.png';

const GitHub = () => {

    return(
        <a href="https://github.com/atapas/covid-19" target="_blank">
            <img src={github} alt='github' style={{width: '45px', height: '45px'}}/>
        </a>
    )
};

export default GitHub;