import React from 'react';

import red_up_arrow from '../../assets/images/up_red_arrow.png';
import green_up_arrow from '../../assets/images/up_green_arrow.png';

const IndiaDistrict = props => {
    const data = props.districtData;
    const districts = Object.keys(data).sort((a, b) => data[b].delta.confirmed - data[a].delta.confirmed);

    return (
        <>
            <ul style={{ padding: '0px' }}>
                {
                    districts.map((name, index) =>
                        <li
                            key={name}
                            style={(index % 2) === 0 ? { backgroundColor: '#ececec' } : { backgroundColor: '#ffffff' }}>
                            📣
                        <span> {name}: {data[name]['confirmed']}</span>
                            <span style={{ marginLeft: '20px', fontSize: '12px' }}>
                                <span>
                                    Active: {data[name]['active']}
                                    {data[name]['delta']['confirmed'] > 0
                                        ?
                                        <span>
                                            {' '}[<img src={red_up_arrow} height="15px" width="15px" /> {data[name]['delta']['confirmed']}]
                                                </span>
                                        : null
                                    }
                                </span>
                                <span style={{ marginLeft: '10px' }}>
                                    Recovered: {data[name]['recovered']}
                                    {data[name]['delta']['recovered'] > 0
                                        ?
                                        <span>
                                            {' '}[<img src={green_up_arrow} height="15px" width="15px" /> {data[name]['delta']['recovered']}]
                                                </span>
                                        : null
                                    }
                                </span>
                                <span style={{ marginLeft: '10px' }}>
                                    Deaths: {data[name]['deceased']}
                                    {data[name]['delta']['deceased'] > 0
                                        ?
                                        <span>
                                            {' '}[<img src={red_up_arrow} height="15px" width="15px" /> {data[name]['delta']['deceased']}]
                                                </span>
                                        : null
                                    }
                                </span>
                                {
                                    data[name]['notes'] && data[name]['notes'].length > 0
                                        ?
                                        <div class='notes'>
                                            <i class="fas fa-info icon"></i>
                                            {data[name]['notes']}
                                        </div> : null
                                }

                            </span>
                        </li>
                    )}
            </ul>
        </>
    )
};

export default IndiaDistrict;