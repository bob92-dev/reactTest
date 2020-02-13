
import React from "react";
import App from "./App";

export default class Formulaire extends React.Component{

   constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }


   handleChange = (event) =>{
                //test    
        console.log("c'est l'event target : " + event.target.value);
        this.setState({value:event.target.value});
        this.props.propsChild(event.target.value); 
       console.log("COUCOU TU VEUX VOIR MON PROPSCHILD" + this.props.propsChild(event.target.value));
    } 
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("value apres submit: " + this.state.value );
        
        
    
    }

    render(){
        return(
            
           // <h1>Liste des tâches à faire</h1>
            <form onSubmit={this.handleSubmit}>
            <input id="input" type="text" name="todo" value={this.state.value} onChange={this.handleChange}/>
            <button>Ajouter</button>
            </form>
            );

    }





} 