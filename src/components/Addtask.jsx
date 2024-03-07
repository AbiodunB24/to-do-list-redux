// AddTask.js (Component to add new tasks)
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions'; // Importing the addTask action.
import ListTask from './ListTask';

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState(''); // State to manage the input field.
  const dispatch = useDispatch(); // Get the dispatch function from the Redux store.

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      dispatch(addTask(taskDescription)); // Dispatches the addTask action with the task description as the payload.
      setTaskDescription(''); // Clears the input field after adding the task.
    }
  };

  return (
    <div className=" h-full mt-5 m-10 flex flex-col gap-10 justify-start items-center">
      <h1 className='text-white mt-10 font-semibold text-2xl'>To Do List App</h1>
      <div className=' flex gap-2'>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Enter task description"
      />
      <button className="bg-blue-500 p-3 rounded-md" onClick={handleAddTask}>+</button>
      </div>
     <ListTask/>
      
    </div>
  );
};

export default AddTask;