import React from 'react';
import NetsciPie from "./NetsciPie";
import {data} from '../../nivo-utils/pie.sample-data';
const PieChart = () => (
    <NetsciPie data={data}/>
);

export default PieChart;