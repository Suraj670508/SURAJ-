import React, { useState } from 'react';

function App() {
  // Step 1: Create state for input and tasks
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  // Step 2: Handle adding a task
  const addTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
    
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>📝 To-Do List</h2>

      {/* Input box and button */}
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: '8px', width: '250px' }}
      />
      <button onClick={addTask} style={{ marginLeft: '10px', padding: '8px 15px' }}>
        Add
      </button>

      {/* Display tasks using map() */}
      <ul style={{ marginTop: '20px', listStyleType: 'none' }}>
        {taskList.map((item, index) => (
          <li key={index} style={{ margin: '8px 0', fontSize: '18px' }}>
            ✅ {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
