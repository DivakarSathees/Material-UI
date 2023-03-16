import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

function App() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Button 
      style={{display: 'block',
        margin: '0 auto',
        marginTop: '20rem'
      }}
      variant="contained" color="primary" onClick={handleDialogOpen}>
        Open Dialog
      </Button>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <p>This is the dialog content</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDialogClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;

