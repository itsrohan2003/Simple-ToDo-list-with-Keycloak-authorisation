import React, { useState } from 'react';
import TodoForm from './conponents/ToDoForm.js';
import TodoList from './conponents/ToDoList.js';
import { httpClient } from './HttpClient.js';
import Keycloak from 'keycloak-js';
import { ApolloProvider, useMutation, useQuery, gql } from '@apollo/client';


/*
Init Options
*/
let initOptions = {
  url: 'http://localhost:8080/',
  realm: 'master',
  clientId: 'react-client',
};

let kc = new Keycloak(initOptions);

kc.init({
  onLoad: 'login-required', // Supported values: 'check-sso' , 'login-required'
  checkLoginIframe: true,
  pkceMethod: 'S256'
}).then((auth) => {
  if (!auth) {
    window.location.reload();
  } else {
    console.info("Authenticated");
    console.log('auth', auth);
    console.log('Keycloak', kc);
    console.log('Access Token', kc.token);

    httpClient.defaults.headers.common['Authorization'] = `Bearer ${kc.token}`;

    kc.onTokenExpired = () => {
      console.log('token expired');
    };
  }
}, () => {
  console.error("Authentication Failed");
});

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    console.log(`Editing todo with id ${id}`);
  };

  const handleLogout = () => {
    kc.logout(); // Initiates Keycloak logout
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', marginBottom: '20px' }}>
      <h1>Todo App</h1>
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px', // Add margin top for spacing
        }}
      >
        Logout
      </button>     
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
};

export default App;