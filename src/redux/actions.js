export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task,
    };
  };
  
  export const deleteTask = (id) => {
    return {
      type: 'DELETE_TASK',
      payload: id,
    };
  };
  // Select a task for editing
    export const setTaskToEdit = (id, task) => {
        return {
        type: 'SET_TASK_TO_EDIT',
        payload: { id, task }
        };
    };
  
  export const editTask = (id, newTask) => {
    return {
      type: 'EDIT_TASK',
      payload: { id, newTask },
    };
  };

// Toggle task completion
export const toggleCompleteTask = (id) => {
    return {
      type: 'TOGGLE_COMPLETE_TASK',
      payload: id,
    };
  };
  
  
