import React, { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Loader from 'react-loader-spinner';

const World = props => {

    const loading = props.countryCoronaDataLoading;
    const data = props.countryCoronaData;
    const [filtered, setFiltered] = useState([]);
    const columnDefs = [
        {headerName: "Country", field: "country", sortable: true, filter: true},
        {headerName: "Total Cases", field: "cases", sortable: true, filter: true},
        {headerName: "Cases Today", field: "todayCases", sortable: true, filter: true},
        {headerName: "Deaths", field: "deaths", sortable: true, filter: true},
        {headerName: "Deaths Today", field: "todayDeaths", sortable: true, filter: true},
        {headerName: "Recovered", field: "recovered", sortable: true, filter: true},
        {headerName: "Active Cases", field: "active", sortable: true, filter: true},
        {headerName: "Critical", field: "critical", sortable: true, filter: true},
        {headerName: "Cases Per One Million", field: "casesPerOneMillion", sortable: true},

    ];

    useEffect(() => {
        if (!loading) {
            console.log(data);
            setFiltered(data);
        }
    }, [loading]);

    const handleFind = event => {
        event.preventDefault();
        console.log(event.target.value);
        let filtered = data.filter(elem => {
            return elem.country.toLowerCase().includes(event.target.value.toLowerCase());
            
        });
        setFiltered(filtered);
    }

    return (
        <div className="world">
            {loading ? 
                <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />  :
                <div className="inner">
                    <div className="search">
                        <FormControl 
                            type="text" 
                            placeholder="Filter by Country Name" 
                            className="mr-sm-2"
                            onChange={event => handleFind(event)} />
                
                    </div>
                    
                    <div
                        className="ag-theme-balham"
                        style={{
                            height: '100%',
                            width: '100%',
                            padding: '10px',
                            position: 'absolute'
                        }}
                    >
                        <AgGridReact
                            columnDefs={columnDefs}
                            rowData={filtered}>
                        </AgGridReact>
                    </div> 
                </div>        
            }
        </div>
    )
};

export default World;