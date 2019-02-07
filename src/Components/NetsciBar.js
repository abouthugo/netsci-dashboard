import React from 'react';
import PropTypes from 'prop-types'
import {ResponsiveBar} from '@nivo/bar';
import * as config from '../nivo-utils/bar.config';

const NetsciBar = ({ data, getColors }) => (
    <ResponsiveBar data={ data }
                   colorBy={ getColors }
                   { ...config }/>
);

NetsciBar.propTypes = {
    data: PropTypes.array,
    getColors: PropTypes.func
};

export default NetsciBar;
