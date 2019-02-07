import React from 'react';
import NetsciBar from '../NetsciBar';
import {randomData, getColors} from '../../dataGen';

const BarChart =  ({x}) => (
    <NetsciBar data={randomData(x)} getColors={getColors}/>
);

export default BarChart;