import React from 'react';
import {NetsciBarResponsive} from '../NetsciBar';
import {randomData, getColors} from '../../dataGen';

const BarChart =  ({x}) => (
    <NetsciBarResponsive data={randomData(x)} getColors={getColors}/>
);

export default BarChart;