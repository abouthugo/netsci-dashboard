import React, { Component } from 'react';

const DataContext = React.createContext();

class DataProvider extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        };
    }

    render(){
        return(
            <DataContext.Provider value={{state: this.state}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
};

export {DataContext, DataProvider};