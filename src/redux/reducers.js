const initialState = {
    tasks: [], 
    taskToEdit: null, // Store the task being edited
    editTaskId: null  // Store the ID of the task being edited
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
              ...state,
              tasks: [...state.tasks, { name: action.payload, isComplete: false }]
            };
          
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task, index) => index !== action.payload)
        };
      case 'SET_TASK_TO_EDIT':
         return {
                ...state,
                taskToEdit: action.payload.task,
                editTaskId: action.payload.id
        };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task, index) =>
            index === action.payload.id ? action.payload.newTask : task
          ),
          taskToEdit: null, // Clear after editing
          editTaskId: null
        };
        case 'TOGGLE_COMPLETE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task, index) =>
                index === action.payload ? { ...task, isComplete: !task.isComplete } : task
                ),
            };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  