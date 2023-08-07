import React from 'react';
import Areachart from './Areachart.js';
import Linechart from './Linechart.js';
import Piechart from './piechart.js';

export default class Charts extends React.Component {
    render() {
        return (

            <div>
                <h2>Area chart</h2>
                <Areachart />

                <h2>Line chart</h2>
                <Linechart />
                <h2>Pie chart</h2>
                <Piechart />


            </div>
        );
    }
}