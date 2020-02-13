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


export default class App extends React.Component {
  //constructor(){

 // }
  
  render(){
    return (

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
                  <Formulaire />
                </Route>

                <Route path="./incomplete"> 
                  <Incomplete />
                </Route>
                
                <Route path="./complete">
                  <Complete />
                </Route>
            </Switch>
          </div>
      </Router>



    );

  }
}