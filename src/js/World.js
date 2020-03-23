import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import FormControl from 'react-bootstrap/FormControl';

const World = props => {
    const data = useSelector(state => state.covid19);
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
        console.log(data);
        setFiltered(data);
    }, []);

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
        </div>
    )
};

export default World;