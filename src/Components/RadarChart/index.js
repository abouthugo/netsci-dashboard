import React from 'react';
import NetsciRadar from "./NetsciRadar";
import { DataContext } from '../../Context';

const RadarChart = () => (
    <DataContext.Consumer>
        {context => <NetsciRadar data={context.state.radar}/>}
    </DataContext.Consumer>
);

export default RadarChart;