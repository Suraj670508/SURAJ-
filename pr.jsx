import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newList = taskList.filter((_, i) => i !== index);
    setTaskList(newList);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>📝 To-Do List</h2>

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: '8px', width: '250px', borderRadius: '5px', border: '1px solid gray' }}
      />
      <button
        onClick={addTask}
        style={{
          marginLeft: '10px',
          padding: '8px 15px',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Add
      </button>

      <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
        {taskList.map((item, index) => (
          <li
            key={index}
            style={{
              margin: '8px auto',
              fontSize: '18px',
              width: '300px',
              background: '#f0f0f0',
              padding: '8px',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>✅ {item}</span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                border: 'none',
                background: 'red',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
