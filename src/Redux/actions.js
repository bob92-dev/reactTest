// le fichier action.js est celui qui gére nommes toutes les actions à mener par le reducer


/*
 * action types
 */

export const ADD_TASK = 'ADD_TASK';
export const END_TASK = 'END_TASK';

/*
 * action creators
 */

/**
 * Add task to store
 *
 * @param      {String}  {type}  Reducer action
 */

export function addTask(task) {
  return { type: ADD_TASK, task };
}


/**
 * End Task from store
 *
 * @param      {String}  {type}  Reducer action
 * @param      {Number}  {index}  task index
 * @return     {Object}  Redux Store Object
 */

export function endTask(index) {
  return { type: END_TASK, index };
}