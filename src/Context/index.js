import React, { Component } from 'react';

import * as helper  from '../data-helpers';
import * as transformer from '../utils/dataTransformer'

const DataContext = React.createContext();

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

        fetch("/api/corpora_metrics")
            .then(res => res.json())
            .then(data => {
                let pieData = transformer.pie(data),
                lineData = helper.lineData(["run", "jog", "walk"], 7),
                barData = helper.barData(10),
                radarData = helper.radarData();
                this.updateState(pieData, lineData, barData, radarData);
            })
            .catch(err => console.log(err));
    }

    updateState({pie, line, bar, radar}) {
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
