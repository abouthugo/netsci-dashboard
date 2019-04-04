import React from 'react';
import PropTypes from 'prop-types'
import { ResponsiveBar } from '@nivo/bar';
import * as config from '../../nivo-utils/bar.config';

const NetsciBar = ({ data }) => (
    <ResponsiveBar data={ data } keys={data.map(i => i.provider)}
                   { ...config }/>
);

NetsciBar.propTypes = {
    data: PropTypes.array,
};

export default NetsciBar;
