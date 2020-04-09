
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from 'styled-components';

const WidgetContainer = ({children}) => {
    const themeContext = useContext(ThemeContext);

    const Widget = styled.div`
        background: ${themeContext.body};
        color: ${themeContext.text};
        border-radius: 0.15rem;
    `;
    console.log('Widget', Widget);

    return (
        <Widget>
            {children}
        </Widget>
    )
};

export default WidgetContainer;