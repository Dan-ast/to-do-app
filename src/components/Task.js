import React from 'react';
import './Task.css';
import { useDispatch } from 'react-redux';
import { deleteTask, setTaskToEdit, toggleCompleteTask } from '../redux/actions'; // Ensure toggleCompleteTask is imported

const Task = ({ task, index, isComplete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(index));
  };

  const handleEdit = () => {
    dispatch(setTaskToEdit(index, task));
  };

  const handleCheckboxChange = () => {
    dispatch(toggleCompleteTask(index)); // Dispatch the toggle action
  };

  return (
    <div className={`task ${isComplete ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={isComplete} // Show whether the task is complete
        onChange={handleCheckboxChange}
      />
      <span>{task.name}</span> {/* Access the task's name property here */}
      <button onClick={handleEdit}>✏️</button>
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
};

export default Task;
