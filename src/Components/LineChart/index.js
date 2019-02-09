import React from 'react';
import NetsciLine from "./NetsciLine";
import { DataContext } from '../../Context';

const LineChart = () => (
    <DataContext.Consumer>
        {context =>
            <NetsciLine data={ context.state.line }/>
        }
    </DataContext.Consumer>
);
export default LineChart;