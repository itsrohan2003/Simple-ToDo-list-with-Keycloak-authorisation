import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const [editedTime, setEditedTime] = useState(todo.time);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSaveEdit = () => {
    onEdit(todo.id, editedTitle, editedDescription, editedTime);
    setEditMode(false);
  };

  return (
    <li style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      {editMode ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px', fontSize: '16px', width: '100%', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px', fontSize: '16px', width: '100%', border: '1px solid #ccc', borderRadius: '5px', resize: 'vertical' }}
          />
          <input
            type="text"
            value={editedTime}
            onChange={(e) => setEditedTime(e.target.value)}
            style={{ marginBottom: '10px', padding: '8px', fontSize: '16px', width: '100%', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <button onClick={handleSaveEdit} style={{ padding: '8px 16px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save</button>
        </div>
      ) : (
        <div>
          <strong style={{ fontSize: '18px' }}>{todo.title}</strong>
          <p style={{ marginBottom: '5px', fontSize: '16px' }}>{todo.description}</p>
          <p style={{ fontSize: '14px', color: '#666' }}>Time: {todo.time}</p>
          <button onClick={handleDelete} style={{ marginRight: '10px', padding: '8px 16px', fontSize: '16px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
          <button onClick={handleEdit} style={{ padding: '8px 16px', fontSize: '16px', backgroundColor: '#ffc107', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Edit</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;