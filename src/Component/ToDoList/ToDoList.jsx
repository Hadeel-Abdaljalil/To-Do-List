import React, { useState } from 'react';
import './ToDoList.css';

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput(''); 
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  return (
    <div className='bg-color vh-100'>
      <div className='container text-center'>
        <h1 className='color-main p-3 fw-bold'>To Do List</h1>
        <div className='d-flex justify-content-center'>
          <select className='btn btn-light border px-5 text-start mx-3'>
            <option value="All">ALL</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
          <div className='d-flex w-50'>
            <input
              type="text"
              className='w-100 rounded-2 px-5 border-1'
              placeholder='What do you want to do next?'
              value={taskInput}
              onChange={handleInputChange} 
            />
            <button className='btn bg-button' type='submit' onClick={addTask}>
              Add Task
            </button>
          </div>
        </div>

        <div className='mt-4'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>#</th>
                <th>Task</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length === 0 ? (
                <tr>
                  <td colSpan="2">No tasks added yet.</td>
                </tr>
              ) : (
                tasks.map((task, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
