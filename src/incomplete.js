
import React from "react";
import App from "./App";


export default class Incomplete extends React.Component{

    constructor({propsChild}){
        super();
        this.state = {
            stateChild: propsChild
        
        };
    }

    componentDidUpdate({propsChild}){
        console.log("etape 2");
        this.setState({...this.state, propsChild});
    }


    render(){

        const {stateChild} = this.state;      
        console.log("coucou avant return");
        return(
            console.log("coucou apres return"),
        <p>{stateChild}</p>
            );

    }
    









}