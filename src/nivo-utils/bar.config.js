exports.legends = [{
    "dataFrom": "keys",
    "anchor": "bottom-right",
    "direction": "column",
    "justify": false,
    "translateX": 120,
    "translateY": 0,
    "itemsSpacing": 2,
    "itemWidth": 100,
    "itemHeight": 20,
    "itemDirection": "left-to-right",
    "itemOpacity": 0.85,
    "symbolSize": 20,
    "symbolShape": "circle",
    "effects": [{
        "on": "hover",
        "style": { "itemOpacity": 1 }
    }]
}];

exports.axisBottom = {
    "tickSize": 5,
    "tickPadding": 5,
    "tickRotation": 0,
    "legend": "Year",
    "legendPosition": "middle",
    "legendOffset": 32
};

exports.margin = {
    top: 60,
    right: 80,
    bottom: 60,
    left: 80
};

exports.indexBy = "year";
exports.keys = ['profits', 'losses',];
exports.colors="set2";
exports.padding= 0.2;
exports.innerPadding = 4;
exports.labelTextColor = "inherit:darker(1.4)";
exports.labelSkipWidth = 16;
exports.labelSkipHeight = 16;
exports.groupMode = "stacked";