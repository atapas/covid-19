import React from "react";
import { useFetch} from './useFetch';

import Button from 'react-bootstrap/Button';

import * as country_code from '../../assets/data/coutry_code.json';

const App = () => {
  const [{ data, loading }] = useFetch(
    "https://pomber.github.io/covid19/timeseries.json"
  );

  const countries = Object.keys( data );

  console.log( loading, data );

  console.log( countries );

  console.log( 'country_code', country_code.data );

  return (
    <React.Fragment>
      <Button variant="secondary" size="sm" active>
        <img src="https://www.countryflags.io/th/flat/32.png" alt="cc"/>
        <span>Thailand</span>
      </Button>
      <Button variant="secondary" size="sm" active>
        <img src="https://www.countryflags.io/jp/flat/32.png" alt="cc"/>
        <span>Japan</span>
      </Button>
    </React.Fragment>
    
  );
};
export default App;

