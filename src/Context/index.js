import React, { Component } from 'react';

import * as helper  from '../data-helpers';

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
        this.setState({
            pie: helper.pieData(["sass", "scss", "css"]),
            line: helper.lineData(["run", "jog", "walk"], 7),
            bar: helper.barData(10),
            radar: helper.radarData()
        });


	fetch("/api/corpora_metrics")
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.log(err));
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
