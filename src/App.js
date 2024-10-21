import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from './redux/actions';
import TaskList from './components/TaskList';

function App() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const taskToEdit = useSelector((state) => state.task.taskToEdit);
  const editTaskId = useSelector((state) => state.task.editTaskId);

  // Populate the input field if a task is selected for editing
  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit.name); // Use the name property, not the whole object
    }
  }, [taskToEdit]);

  const handleAddOrEditTask = () => {
    if (task === '') return;

    if (taskToEdit) {
      // Save edited task
      dispatch(editTask(editTaskId, { name: task }));
    } else {
      // Add a new task
      dispatch(addTask(task));
    }

    setTask(''); // Clear the input field after adding or editing
  };

  return (
    <div className="App">
      <h1>TO-DO APP</h1>
      <div className="task-input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button className="add-task" onClick={handleAddOrEditTask}>
          {taskToEdit ? 'Save Task' : 'Add Task'}
        </button>
      </div>
      <TaskList />

      <footer className="footer">
        &copy; {new Date().getFullYear()} <a href="https://github.com/Dan-ast/to-do-app" target="_blank"  rel="noopener noreferrer">Anastasiia Dekret</a>. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
