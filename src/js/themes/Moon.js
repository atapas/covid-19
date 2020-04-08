
import React from 'react';

import Moon from '../../../assets/images/moon.svg';

const MoonIcon = () => {
    return (
        <div className="themeIcon">
            <img src={Moon} style={{width:'18px'}} alt="Moon Logo" />
        </div>
    )
};

export default MoonIcon;