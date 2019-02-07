import React from 'react';
import NetsciLine from "./NetsciLine";
import {produceData} from '../../nivo-utils/line.sample-data';
const LineChart = () => (
    <NetsciLine data={produceData()}/>
);

export default LineChart;