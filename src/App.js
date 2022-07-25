import React from 'react';
import './App.module.css';
import Form from './components/Form/Form';
import Users from './components/Users/Users';

function App() {
  return (
    <div className={styles.App}>
      <h2 className={styles.title}>title</h2>
      <Users></Users>
      <Form></Form>
    </div>
  );
}

export default App;
