exports.data = [
    {
        "id": "japan",
        "color": "hsl(40, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 69
            },
            {
                "x": "helicopter",
                "y": 161
            },
            {
                "x": "boat",
                "y": 148
            },
            {
                "x": "train",
                "y": 97
            },
            {
                "x": "subway",
                "y": 93
            },
            {
                "x": "bus",
                "y": 174
            },
            {
                "x": "car",
                "y": 280
            },
            {
                "x": "moto",
                "y": 168
            },
            {
                "x": "bicycle",
                "y": 213
            },
            {
                "x": "others",
                "y": 136
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(210, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 263
            },
            {
                "x": "helicopter",
                "y": 258
            },
            {
                "x": "boat",
                "y": 146
            },
            {
                "x": "train",
                "y": 147
            },
            {
                "x": "subway",
                "y": 192
            },
            {
                "x": "bus",
                "y": 224
            },
            {
                "x": "car",
                "y": 260
            },
            {
                "x": "moto",
                "y": 152
            },
            {
                "x": "bicycle",
                "y": 218
            },
            {
                "x": "others",
                "y": 186
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(25, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 63
            },
            {
                "x": "helicopter",
                "y": 45
            },
            {
                "x": "boat",
                "y": 113
            },
            {
                "x": "train",
                "y": 169
            },
            {
                "x": "subway",
                "y": 187
            },
            {
                "x": "bus",
                "y": 200
            },
            {
                "x": "car",
                "y": 276
            },
            {
                "x": "moto",
                "y": 208
            },
            {
                "x": "bicycle",
                "y": 19
            },
            {
                "x": "others",
                "y": 220
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(208, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 138
            },
            {
                "x": "helicopter",
                "y": 130
            },
            {
                "x": "boat",
                "y": 85
            },
            {
                "x": "train",
                "y": 35
            },
            {
                "x": "subway",
                "y": 210
            },
            {
                "x": "bus",
                "y": 9
            },
            {
                "x": "car",
                "y": 56
            },
            {
                "x": "moto",
                "y": 179
            },
            {
                "x": "bicycle",
                "y": 4
            },
            {
                "x": "others",
                "y": 147
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(243, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 208
            },
            {
                "x": "helicopter",
                "y": 259
            },
            {
                "x": "boat",
                "y": 141
            },
            {
                "x": "train",
                "y": 20
            },
            {
                "x": "subway",
                "y": 164
            },
            {
                "x": "bus",
                "y": 194
            },
            {
                "x": "car",
                "y": 218
            },
            {
                "x": "moto",
                "y": 215
            },
            {
                "x": "bicycle",
                "y": 289
            },
            {
                "x": "others",
                "y": 201
            }
        ]
    }
];

exports.produceData = () => {
    let res = [];
    for(let i = 0; i < 2 ; i++){
        if(i>0)
            res[i] = {id: "Free_Weibo", data: [], "color": "#E65575"};
        else
            res[i] = {id: "Novaya_Gazeta", data: [], "color": '#418DE6'};

        for(let j = 0; j < 10; j++){
            res[i].data.push({x: j, y: Math.floor(Math.random()*100 + j)})
        }
    }
    return res;
};