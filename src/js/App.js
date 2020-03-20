import React from "react";
import {
  BrowserRouter as Router,
  Route, 
  Switch, 
  Link
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { useFetch } from './useFetch';

import Home from './Home';
import World from './World';
import Countries from './Countries';

const App = () => {
  const [countryData, countryDataLoading] = useFetch(
    "https://corona.lmao.ninja/countries"
  );

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">COVID-19</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/world">World</Nav.Link>
            <Nav.Link href="/countries">Countries</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search by Country" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home countryData={countryData} countryDataLoading={countryDataLoading} />
          </Route>
          <Route exact path="/home">
            <Home countryData={countryData} countryDataLoading={countryDataLoading} />
          </Route>
          <Route path="/world">
            <World countryData={countryData} countryDataLoading={countryDataLoading} />
          </Route>
          <Route path="/countries">
            <Countries countryData={countryData} countryDataLoading={countryDataLoading} />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
};
export default App;

