import React from "react";
import { AgGridReact } from 'ag-grid-react';

const World = props => {

    const loading = props.countryDataLoading;
    const data = props.countryData;
    const columnDefs = [
        {headerName: "Country", field: "country"},
        {headerName: "Total Cases", field: "cases"},
        {headerName: "Cases Today", field: "todayCases"},
        {headerName: "Deaths", field: "deaths"},
        {headerName: "Deaths Today", field: "todayDeaths"},
        {headerName: "Recovered", field: "recovered"},
        {headerName: "Active Cases", field: "active"},
        {headerName: "Critical", field: "critical"},
        {headerName: "Cases Per One Million", field: "casesPerOneMillion"},

    ];
    const rowData = [
        {country: "Toyota", cases: "Celica", todayCases: 35000},
        {country: "Ford", cases: "Mondeo", todayCases: 32000},
        {country: "Porsche", cases: "Boxter", todayCases: 72000}
    ];

    return (
        <div className="world">
            {loading ? <h3>Loading...</h3> :
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
                        rowData={data}>
                    </AgGridReact>
                </div> 
            }
        </div>
    )
};

export default World;