exports.legends = [{
    "dataFrom": "keys",
    "anchor": "bottom-right",
    "direction": "column",
    "justify": false,
    "translateX": 155,
    "translateY": 0,
    "itemsSpacing": 2,
    "itemWidth": 160,
    "itemHeight": 30,
    "itemDirection": "left-to-right",
    "itemOpacity": 0.85,
    "symbolSize": 20,
    "symbolShape": "circle",
    "effects": [{
        "on": "hover",
        "style": { "itemOpacity": 1 }
    }]
}];

// exports.colorBy = ({id}) => {
//     if(id === "profits") return "#418DE6";
//     else return "#E65575";
// };

exports.axisBottom = {
    "tickSize": 5,
    "tickPadding": 5,
    "tickRotation": 0,
    "legend": "Database Record Count",
    "legendPosition": "middle",
    "legendOffset": 52
};

exports.axisLeft = {
    "legend": "Count",
    "legendPosition": "middle",
    "legendOffset": -58
};

exports.margin = {
    top: 60,
    right: 80,
    bottom: 60,
    left: 80
};

exports.indexBy = "provider";
// exports.keys = [];
exports.colors="set2";
exports.padding= 0.2;
exports.innerPadding = 4;
exports.labelTextColor = "inherit:darker(1.4)";
exports.labelSkipWidth = 16;
exports.labelSkipHeight = 16;
exports.groupMode = "stacked";