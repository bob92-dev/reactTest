import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { addTask, endTask } from "../Redux/actions";
import Formulaire from '../formulaire';



class Tasks extends React.Component {
    constructor({propsChild}){
        super();
        this.state = {
            stateChild: propsChild
    
        };
    }


    
    addTask() {// ici qu'il faut saisir les données
		this.props.addTask(
	      this.state.stateChild
        );
        console.log("coucou c'est la fonctoion addtask qui te parle" + this.state.stateChild)
	}

	endTask(index) {
		this.props.endTask(index);
	}

	render() {
		const { tasks } = this.props;
		return (
			<div> 
				<button onClick={() => this.addTask()}>Ajouter</button>
				{tasks.map((task, index) =>
					(
						<p key={index}>
							{tasks.task} <button onClick={() => this.endTask(index)}>Terminer</button>
						</p>
					)
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		task: state.task
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTask: task => {
			dispatch(addTask(task))
		},
		addTask: index => {
			dispatch(endTask(index))
		}
	}
}



export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Tasks));






