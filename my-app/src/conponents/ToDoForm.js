import React, { useState } from 'react';

const TodoForm = ({ onSubmit, buttonText = 'Add' }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, time });
    setTitle('');
    setDescription('');
    setTime('');
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