import React, { useState } from 'react';

const TodoForm = ({ onSubmit, buttonText = 'Add' }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare todo object with the form data
    const newTodo = {
      title,
      description,
      time
    };

    try {
      // Send a POST request to your server
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

      // Reset form inputs after successful submission
      setTitle('');
      setDescription('');
      setTime('');

      // Invoke the onSubmit callback passed from parent component
      onSubmit(newTodo);
    } catch (error) {
      console.error('Error adding todo:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="text"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      {/* Image upload input (for Pro license) */}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default TodoForm;
