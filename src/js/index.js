import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../../assets/styles/sass/styles.scss';

import { Provider } from 'react-redux';
import store from './store';

import App from "./App";


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById("app")
);