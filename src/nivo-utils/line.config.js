exports.margin = {
    "top": 50,
    "right": 110,
    "bottom": 50,
    "left": 60
};

exports.curve = "natural";

exports.xScale={
    "type": "point"
};

exports.yScale={
    "type": "linear",
    "stacked": true,
    "min": "auto",
    "max": "auto"
};

exports.axisBottom={
    "orient": "bottom",
    "tickSize": 5,
    "tickPadding": 5,
    "tickRotation": 0,
    "legend": "Hits", // TODO: Change this to reflect the real legend
    "legendOffset": 36,
    "legendPosition": "middle"
};

exports.axisLeft={
    "orient": "left",
    "tickSize": 5,
    "tickPadding": 5,
    "tickRotation": 0,
    "legend": "count",
    "legendOffset": -40,
    "legendPosition": "middle"
};

exports.colorBy = (node) => {
    return node.color;
};

exports.dotSize=9;
exports.dotColor="inherit:darker(0.2)";
exports.dotBorderWidth=2;
exports.dotBorderColor="#ffffff";
exports.enableDotLabel=true;
exports.dotLabel="y";
exports.dotLabelYOffset=-12;
exports.animate=true;
exports.motionStiffness=90;
exports.motionDamping=15;
exports.legends=[{
        "anchor": "bottom-right",
        "direction": "column",
        "justify": false,
        "translateX": 100,
        "translateY": 0,
        "itemsSpacing": 0,
        "itemDirection": "left-to-right",
        "itemWidth": 80,
        "itemHeight": 20,
        "itemOpacity": 0.75,
        "symbolSize": 12,
        "symbolShape": "circle",
        "symbolBorderColor": "rgba(0, 0, 0, .5)",
        "effects": [{
            "on": "hover",
            "style": {
                "itemBackground": "rgba(0, 0, 0, .03)",
                "itemOpacity": 1
            }
        }]
    }
];