import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { TextField, Typography } from '@material-ui/core';
 function App() {
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);   
const handleClick = () => {
  if(name !== '' && age !== '')
    setOpen(true);
  };  
 const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }     
setOpen(false);
  };   
return (
<div style={{ display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:'10rem' }}>
      <Typography variant="h4">Submit you details</Typography>
<TextField
       style={{marginTop:'2rem'}} 
        id="name"
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
      style={{marginTop:'2rem'}}
        id="age"
        label="Age"
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
  <Button style={{marginTop:'2rem'}} onClick={handleClick}>Submit</Button>
  <Snackbar
        open={open}
        autoHideDuration={3000} // Snackbar will close after 3 seconds
        onClose={handleClose}
        message="Successfully Completed"
      />
</div>
  );
}

export default App;