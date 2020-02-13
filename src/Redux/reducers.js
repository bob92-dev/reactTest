//Reducer est le fichier qui agit sdur la BDD et qui contient la BDD

// import des noms et fonctions des actions
import {
    ADD_TASK,
    END_TASK,
  } from './actions'
  
  
  
  // c'ets ici qu'est généré la BDD
  const initialState = {
  /**
   * Task datas [{Object}]
   *
   * @param      {String}  {task}
   */
      tasks: [
          {
              task: 'Obtenir une dédicasse de Mr CASSEL',
          }
      ]
  };

  
const arrayHasIndex = (array, index) => Array.isArray(array) && array.hasOwnProperty(index);


// debut fonction reducer qui gére la BDD
export default function reducer(state = initialState, action) {
	console.log('reducer', action.type);
	switch (action.type) {

		case ADD_TASK:
			return { ...state, tasks: [ ...state.tasks, action.task   ] };

		case END_TASK:
			if (arrayHasIndex(state.tasks, action.datas.index)) {
				return {...state, tasks: state.tasks.map((sigmap, index) => {
					if ( index === action.datas.index ) {
						return action.datas.task;
					}
					return sigmap;
				})};
			}
			return state;

		default:
			return state
	}
}