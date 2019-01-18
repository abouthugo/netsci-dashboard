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
            return "#A7E1D5";
        }else {
            return "tomato";
        }
    }
};