exports.margin = {
    "top": 0,
    "right": 1,
    "bottom": 92,
    "left": 10
};

exports.sortByValue = true;
exports.innerRadius = 0.7;
exports.padAngle = 5;
exports.colors = "nivo";
// exports.colorBy = (node) => node.color;
exports.borderWidth = 1;
exports.borderColor = "inherit";

exports.enableRadialLabels = false;
//  Radial Label Settings:
// exports.radialLabel = "value";
// exports.radialLabelsSkipAngle = 34;
// exports.radialLabelsTextXOffset = 6;
// exports.radialLabelsTextColor = "#333333";
// exports.radialLabelsLinkOffset = -8;
// exports.radialLabelsLinkDiagonalLength = 16;
// exports.radialLabelsLinkHorizontalLength = 21;
// exports.radialLabelsLinkStrokeWidth = 1;
// exports.radialLabelsLinkColor = "inherit";

exports.sliceLabel = "value";
exports.slicesLabelsSkipAngle = 2;
exports.slicesLabelsTextColor = "#333333";
exports.animate = true;
exports.motionStiffness = 90;
exports.motionDamping = 15;

exports.defs = [
    {
        "id": "dots",
        "type": "patternDots",
        "background": "inherit",
        "color": "rgba(255, 255, 255, 0.3)",
        "size": 4,
        "padding": 1,
        "stagger": true
    },
    {
        "id":
            "lines",
        "type":
            "patternLines",
        "background":
            "inherit",
        "color":
            "rgba(255, 255, 255, 0.3)",
        "rotation":
            -45,
        "lineWidth":
            6,
        "spacing":
            10
    }
];


exports.fill = [
    {
        "match": { "id": "ruby" },
        "id": "dots"
    },
    {
        "match": { "id": "c" },
        "id": "dots"
    },
    {
        "match": { "id": "go" },
        "id": "dots"
    },
    {
        "match": { "id": "python" },
        "id": "dots"
    },
    {
        "match": { "id": "scala" },
        "id": "lines"
    },
    {
        "match": { "id": "lisp" },
        "id": "lines"
    },
    {
        "match": { "id": "elixir" },
        "id": "lines"
    },
    {
        "match": { "id": "javascript" },
        "id": "lines"
    }
];

exports.legends = [{
    "anchor": "bottom",
    "direction": "column",
    "translateY": 56,
    "itemWidth": 50,
    "itemHeight": 20,
    "itemTextColor": "#999",
    "symbolSize": 10,
    "symbolShape": "circle",
    "effects": [{
        "on": "hover",
        "style": { "itemTextColor": "#000" }
    }]
}];
