import React, { Component } from 'react';

import * as helper  from '../data-helpers';
import * as transformer from '../utils/dataTransformer'

const DataContext = React.createContext();
const URL = "http://netsci.montclair.edu:5000";

class DataProvider extends Component {
    constructor() {
        super();
        this.state = {
            pie: [],
            line: [],
            bar: [],
            radar: []
        };
    }

    componentDidMount() {

        fetch(`${URL}/corpora_metrics`)
            .then(res => res.json())
            .then(data => {
                delete data["freeweibo_topic_count"]
                console.log(data);
                console.log(typeof data);
                let pieData = transformer.pie(data),
                lineData = helper.lineData(["run", "jog", "walk"], 7),
                barData = helper.barData(10),
                radarData = helper.radarData();
                console.log(pieData);
                this.updateState(pieData, lineData, barData, radarData);
            })
            .catch(err => console.log(err));
    }

    updateState = (pie, line, bar, radar) => {
        console.log("Checkpoint, component mounted update state called")
        this.setState({
            pie,
            line,
            bar,
            radar
        })
    }

    randomPie = () => {
        this.setState({
            pie: helper.pieData(["sass", "scss", "css"])
        });
    };

    randomLine = () => {
        this.setState({
            line: helper.lineData(["run", "jog", "walk"], 7)
        });
    };

    randomBar = () => {
        this.setState({
            bar: helper.barData(10)
        });
    };

    randomRadar = () => {
        this.setState({
            radar: helper.radarData()
        })
    };

    buildCharts = () => {
        this.setState({
            pie: helper.pieData(["sass", "scss", "css"]),
            line: helper.lineData(["run", "jog", "walk"], 7),
            bar: helper.barData(10),
            radar: helper.radarData()
        });
    };

    render() {
        return (
            <DataContext.Provider
                value={ {
                    state: this.state,
                    randomPie: this.randomPie,
                    randomLine: this.randomLine,
                    randomBar: this.randomBar,
                    randomRadar: this.randomRadar,
                    buildCharts: this.buildCharts
                } }
            >
                { this.props.children }
            </DataContext.Provider>
        );
    }
}

export { DataContext, DataProvider };
