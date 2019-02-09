import React from 'react';
import NetsciBar from './NetsciBar';
import { DataContext } from '../../Context';

const BarChart =  () => (
    <DataContext.Consumer>
        {context => <NetsciBar data={context.state.bar} />}
    </DataContext.Consumer>
);

export default BarChart;