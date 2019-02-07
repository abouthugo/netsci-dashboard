import React from 'react';
import {ResponsiveLine} from '@nivo/line';
import * as configs from '../../nivo-utils/line.config';
const NetsciLine = ({data}) => (
    <ResponsiveLine
        data={ data }
        { ...configs }
    />
);

export default NetsciLine;