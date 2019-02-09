exports.keys = ["player 1", "player 2"];
exports.indexBy = "skill";
exports.maxValue = "auto";
exports.margin = {
    "top": 70,
    "right": 80,
    "bottom": 40,
    "left": 80
};
exports.curve = "catmullRomClosed";
exports.borderWidth = 2;
exports.borderColor = "inherit";
exports.gridLevels = 5;
exports.gridShape = "circular";
exports.gridLabelOffset = 36;
exports.enableDots = true;
exports.dotSize = 8;
exports.dotColor = "inherit";
exports.dotBorderWidth = 0;
exports.dotBorderColor = "#ffffff";
exports.enableDotLabel = true;
exports.dotLabel = "value";
exports.dotLabelYOffset = -12;

exports.colors = "nivo";
exports.colorBy = "key";
exports.fillOpacity = 0.1;
exports.animate = true;
exports.motionStiffness = 90;
exports.motionDamping = 15;
exports.isInteractive = true;
exports.legends = [{
    "anchor": "top-left",
    "direction": "column",
    "translateX": -50,
    "translateY": -40,
    "itemWidth": 80,
    "itemHeight": 20,
    "itemTextColor": "#999",
    "symbolSize": 12,
    "symbolShape": "circle",
    "effects": [{
        "on": "hover",
        "style": { "itemTextColor": "#000" }
    }]
}];
