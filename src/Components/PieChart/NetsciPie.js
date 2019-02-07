import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import * as configs from "../../nivo-utils/pie.config";
const NetsciPie = ({data}) => (
    <ResponsivePie
        data={data}
        {...configs}
    />
);

export default NetsciPie;