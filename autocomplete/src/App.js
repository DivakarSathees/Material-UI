import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button, Typography } from '@material-ui/core';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Durian', value: 'durian' },
  { label: 'Elderberry', value: 'elderberry' },
];



function App() {
  const [name, setName] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}! Your favorite fruit is ${selectedOption.label}.`);
  };

  

  return (
    <form style={{ 
      // display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:'10rem',
    marginLeft:'22rem'}} onSubmit={handleSubmit}>
      <Typography variant="h4">Enter your name favourite fruit : </Typography>
      <TextField
       style={{marginTop:'2rem'}} 
        id="name"
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      value={selectedOption}
      onChange={(event, newValue) => {
        setSelectedOption(newValue);
      }}
      renderInput={(params) => (
        <TextField style={{width:'500px', marginTop: '2rem'}}
          {...params}
          label="Choose a fruit"
          variant="outlined"
        />
      )}
    />
    <Button style={{marginTop:'2rem'}} variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default App;
