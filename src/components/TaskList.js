import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector(state => state.task.tasks);

  return (
    <div>
      {tasks.map((task, index) => (
        <Task task={task} key={index} index={index} isComplete={task.isComplete} /> // Pass the full task object
      ))}
    </div>
  );
};

export default TaskList;
