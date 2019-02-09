import React from 'react';
import NetsciPie from "./NetsciPie";
import { DataContext } from "../../Context";

const PieChart = () => (
    <DataContext.Consumer>
        { context => <NetsciPie data={ context.state.pie }/> }
    </DataContext.Consumer>
);
export default PieChart;