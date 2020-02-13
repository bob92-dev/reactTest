
import React from "react";
import App from "./App";

export default class Formulaire extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value:'babar'
        }
    }


    monClick = (event) =>{
                //test
                console.log("c'est l'event target : " + event.target[0].value)

        event.preventDefault();
        this.setState({value:event.target[0].value});
        this.props.propsChild({value:event.target[0].value})    
    } 

    render(){
        return(
            
           // <h1>Liste des tâches à faire</h1>
            <form class="form">
            <input type="text" name="todo"/>
            <button onClick={this.monClick}></button>
            </form>
            );

    }





} 