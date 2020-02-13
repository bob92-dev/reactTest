import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { addTask, endTask } from "../Redux/actions";

class Tasks extends React.Component {
	addTask() {// ici qu'il faut saisir les données


		this.props.addTask({
	      task: 'Truc',
	    });
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
		tasks: state.tasks
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


// foncton nécessiar epour relier students au store ?
export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Tasks));






