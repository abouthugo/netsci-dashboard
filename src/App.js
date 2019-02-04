import React, { Component } from 'react';
import './App.scss'; // main utilities, grid and stuff
import {viewpanel} from './Components/styles/App.module.scss';
import {NetsciBarResponsive} from "./Components/NetsciBar";
import {randomData, getColors} from './dataGen'
class App extends Component {

    constructor(){
        super();
        this.state = {
            data: []
        };
    }

    handleClick = () => {
        this.setState({
            data: randomData(5)
        })
    };

    render() {
        const {data} = this.state;
        return (
           <section className="hero is-fullheight">
            <div className="hero-body">
                <div className={viewpanel}>
                    <NetsciBarResponsive data={data} getColors={getColors}/>
                </div>
                <button onClick={this.handleClick}>Roll</button>
            </div>
           </section>
        );
    }
}


export default App;
