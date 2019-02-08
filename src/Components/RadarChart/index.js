import React from 'react';
import { data } from '../../nivo-utils/radar.sample-data';
import NetsciRadar from "./NetsciRadar";

const RadarChart = () => (
    <NetsciRadar data={data}/>
);

export default RadarChart;