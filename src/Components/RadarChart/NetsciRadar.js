import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import * as configs from '../../nivo-utils/radar.config';
const NetsciRadar = ({data}) => (
  <ResponsiveRadar
      data={data}
      {...configs}
  />
);

export default NetsciRadar