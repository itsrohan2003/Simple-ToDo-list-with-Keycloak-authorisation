import React, { useState } from 'react';

const TodoForm = ({ onSubmit, buttonText = 'Add' }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTodo = { title, description, time };

    try {
      const response = await fetch('http://localhost:5000/api/add_todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      });

      if (!response.ok) {
        throw new Error('Failed to add todo');
      }

      setTitle('');
      setDescription('');
      setTime('');

      onSubmit(newTodo);
    } catch (error) {
      console.error('Error adding todo:', error.message);
    }
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '0 auto'
      }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ marginBottom: '10px', padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ marginBottom: '10px', padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
      ></textarea>
      <input
        type="text"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        style={{ marginBottom: '10px', padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default TodoForm;
