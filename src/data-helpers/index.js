exports.lineData = (labels, dataPoints) => {
    const arr = [];
    for(let i=0; i<labels.length; i++){
        arr.push({
            id: labels[i],
            color: exports.randomColor(),
            data: exports.randomData(dataPoints)
        });
    }
    return arr;
};

exports.pieData = (labels) => {
    const arr = [];
    for(let i=0; i<labels.length; i++){
        arr.push({
            id: labels[i],
            label: labels[i],
            value: Math.floor(Math.random()*300),
            color: exports.randomColor()
        });
    }
    return arr;
};

exports.barData = (years) => {
    let res = [];
    for(let i = 0; i < years; i++){
        let y = 2012+i;
        y = y.toString();
        res.push({
            "year": y,
            "profits": Math.floor(Math.random()*1200),
            "losses": Math.floor(Math.random()*1000),
        });
    }
    return res;
};

exports.radarData = () => {
  let res = [];
  const categories = ["Speed", "Resistance", "Strategy", "Agility", "Strength"];
  for(const cat of categories){
      res.push({
          "skill": cat,
          "player 1": Math.floor(Math.random()*100)+10,
          "player 2": Math.floor(Math.random()*100)+10
      });
  }
  return res;
};

exports.randomData = (dataPoints) => {
    const data = [];
    let days = [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"
    ];
    for(let i = 0; i < dataPoints; i++){
        data.push({x: days[i], y: Math.floor(Math.random()*100)});
    }
    return data;
};

exports.randomColor = () => {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
};
