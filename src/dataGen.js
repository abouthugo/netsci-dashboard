module.exports = {
    randomData: (years) =>{
        let fakeData = [];
        for(let i = 0; i < years; i++){
            let y = 2012+i;
            y = y.toString();
            fakeData.push({
                "year": y,
                "profits": Math.floor(Math.random()*1200),
                "losses": Math.floor(Math.random()*1000),
            });
        }
        return fakeData;
    },
    getColors: ({id}) => {
        if(id === "profits"){
            return "#90FCB5";
        }else {
            return "#E65575";
        }
    }
};