import React from 'react';
import PropTypes from 'prop-types'
import { Bar, ResponsiveBar } from '@nivo/bar';
import { legend, axisBottom } from '../nivo.utils/configs/basic';
const NetsciBar = ({data, getColors}) => (
    <Bar
        width={900}
        height={500}
        margin={{
            top: 60,
            right: 80,
            bottom: 60,
            left: 80
        }}
        data={data}
        indexBy="year"
        keys={[
            'profits',
            'losses',
        ]}
        colors="set2"
        colorBy={getColors}
        padding={0.2}
        innerPadding={4}
        labelTextColor="inherit:darker(1.4)"
        labelSkipWidth={16}
        labelSkipHeight={16}
        groupMode="grouped"
        axisBottom={axisBottom}
        legends={legend}
    />
);

NetsciBar.propTypes = {
    data: PropTypes.array,
    getColors: PropTypes.func
};

const NetsciBarResponsive = ({data, getColors}) => (
    <ResponsiveBar
        margin={{
            top: 60,
            right: 80,
            bottom: 60,
            left: 80
        }}
        data={data}
        indexBy="year"
        keys={[
            'profits',
            'losses',
        ]}
        colors="set2"
        colorBy={getColors}
        padding={0.2}
        innerPadding={4}
        labelTextColor="inherit:darker(1.4)"
        labelSkipWidth={16}
        labelSkipHeight={16}
        groupMode="stacked"
        axisBottom={axisBottom}
        legends={legend}
    />
);

NetsciBarResponsive.propTypes = {
    data: PropTypes.array,
    getColors: PropTypes.func
};

export {
    NetsciBarResponsive,
    NetsciBar
}