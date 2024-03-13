import React from 'react';
import "./App.css"
import {DatePicker} from "antd";


const App = () => {

    return (
        <div className="App">
            <header className="container-fluid bg-info text-white min-vh-100 d-flex flex-column
            align-items-center justify-content-center">
                <DatePicker picker />
                <DatePicker picker='month' />
                <DatePicker picker='quarter' />
                <DatePicker picker='year' />
                <DatePicker.RangePicker />
            </header>
        </div>

)};
export default App;