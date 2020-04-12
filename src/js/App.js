import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import Loader from 'react-loader-spinner';

import { useFetch } from './useFetch';

import Home from './Home';
import World from './World';
import Countries from './Countries';
import Country from './Country';
import NotFoundPage from './NotFoundPage';
import News from './News';
import Information from './Information';
import About from './About';

import { registerCovid19Data } from './actions/covidAction';

import * as covid from '../../assets/images/covid.png';

const App = () => {
  const dispatch = useDispatch();
  const [countryCoronaData, countryCoronaDataLoading] = useFetch(
    "https://corona.lmao.ninja/countries"
  );
  
  if (!countryCoronaDataLoading) {
    dispatch(registerCovid19Data(countryCoronaData));
  }

  return (
    
      
        <Router>
          <div className="App">
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="/">
                <img
                  alt={covid}
                  src={covid}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                COVID-19
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/world">World</Nav.Link>
                <Nav.Link href="/countries">Countries</Nav.Link>
                <Nav.Link href="/Information">Information</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>
              </Nav>
              <About />
            </Navbar>

            <Switch>
            <Route exact path="/"
                render={props => 
                  countryCoronaDataLoading ?
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={150}
                    width={150}
                    style={{marginLeft: '40%', marginTop: '13%'}}
                  /> :              
                  <Home {...props} />}
                 />
              <Route exact path="/home"
                render={props => 
                  countryCoronaDataLoading ?
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={150}
                    width={150}
                    style={{marginLeft: '40%', marginTop: '13%'}}
                  /> :              
                  <Home {...props} />}
                 />
              <Route exact path="/world"
              render={props => 
                countryCoronaDataLoading ?
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={150}
                    width={150}
                    style={{marginLeft: '40%', marginTop: '13%'}}
                  /> :              
                  <World {...props}/>}
              />
              <Route exact path="/countries"
                render={props => 
                  countryCoronaDataLoading ?
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={150}
                    width={150}
                    style={{marginLeft: '40%', marginTop: '13%'}}
                  /> :              
                  <Countries {...props} />}
                 />
              <Route exact path="/country-details" 
                render={props =>
                  countryCoronaDataLoading ?
                  <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={150}
                    width={150}
                    style={{marginLeft: '40%', marginTop: '13%'}}
                  /> :              
                  <Country {...props} />} />
                  <Route exact path="/news">  
                    <News />
                  </Route>
                  <Route exact path="/information">  
                    <Information />
                  </Route>
              <Route path='*' render={(props) => <NotFoundPage {...props} />} />
            </Switch>
          </div>
        </Router>
  );
};
export default App;

