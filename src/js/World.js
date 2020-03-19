import React from "react";
import { AgGridReact } from 'ag-grid-react';

const World = props => {

    const loading = props.countryDataLoading;
    const data = props.countryData;
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