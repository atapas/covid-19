import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

import { ToggleContainer } from './Toggle.styled';

import Moon from '../../../assets/images/moon.svg';
import SunIcon from './Sun';
import MoonIcon from './Moon';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;