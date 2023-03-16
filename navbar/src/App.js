import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#333',
  },
  menuButton: {
    marginRight: '10px',
  },
  title: {
    flexGrow: 1,
  },
});

function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          NavBar
        </Typography>
        <Button color="inherit">Login</Button>
        <Menu
          id="menu-list"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default App;
