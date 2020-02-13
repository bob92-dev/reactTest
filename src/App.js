import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Complete from "./complete";
import Incomplete from "./incomplete";
import Formulaire from "./formulaire";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Redux/reducers'

// constante nécessaire dans tout projet pour relier react à redux 
const store = createStore(reducer)

export default class App extends React.Component {
  constructor(...props){
    super(...props);
    this.state={
      StateParent:''
    }

  }

  

  

  passerelle = (event)=>{
    console.log(event);
    this.setState({...this.state, StateParent:event});
    console.log("ici le stateParent du haut" + this.state.StateParent);
  }


  
  render(){
    return (
      <Provider store={store}>
        <Router>
            <div>

              <ul>
                <li>
                  <Link to="/">Entrez une nouvelle tâche</Link>
                </li>
                <li>
                  <Link to="/incomplete">Tâches à effectuer</Link>
                </li>

                <li>
                  <Link to="/complete">Tâches réalisées</Link>
                </li>


              </ul>

              <Switch>
                  <Route exact path="/">
                    <Formulaire propsChild={this.passerelle}/>
                  </Route>

                  <Route path="/incomplete"> 
                    <Incomplete propsChild={this.state.StateParent}/>
                  </Route>
                  
                  <Route path="./complete">
                    <Complete />
                  </Route>
              </Switch>
            </div>
        </Router>
      </Provider>


    );

  }
}