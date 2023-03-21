import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}! You are ${age} years old.`);
  };

  return (
    <form onSubmit={handleSubmit}
    style={{ display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:'10rem' }}
    >
      <Typography variant="h4">Enter your name and age:</Typography>
      <TextField
       style={{marginTop:'2rem'}} 
        id="name"
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />&nbsp;
      <TextField
        id="age"
        label="Age"
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <Button style={{marginTop:'2rem'}} variant="contained" color="primary" type="submit">
        Submit
      </Button>
      
    </form>

  );
}

export default App;
