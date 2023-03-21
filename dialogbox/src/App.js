import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleLogin = () => {
    // code to handle user login
    setOpenDialog(false);
    alert("Login Successful")

  };

  return (
    <div>
      <Button data-testid="login"
      style={{display: 'block',
        margin: '0 auto',
        marginTop: '20rem'
      }}
      variant="contained" color="primary" onClick={handleDialogOpen}>
        Login
      </Button>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            data-testid="username"
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            data-testid="password"
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button data-testid="cancel" onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button data-testid="dia-login" onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;

