import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

 const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop:'10rem'
  },
})); 
function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);   
const handleChange = (event, newValue) => {
    setValue(newValue);
  };   
return (
<div className={classes.root}>
  <h1>Week Schedule</h1>
  <Tabs value={value} onChange={handleChange}>
  <Tab label="Monday" />
  <Tab label="Tuesday" />
  <Tab label="Wednesday" />
  <Tab label="Thursday" />
  <Tab label="Friday" />
  </Tabs>
      {value === 0 && <div style={{marginTop:"2rem"}}>No Schedule</div>}
      {value === 1 && <div style={{marginTop:"2rem"}}>Trip to Ooty</div>}
      {value === 2 && <div style={{marginTop:"2rem"}}>Meeting with Client</div>}
      {value === 3 && <div style={{marginTop:"2rem"}}>Meeting with Teamates</div>}
      {value === 4 && <div style={{marginTop:"2rem"}}>Weekend preparations</div>} 
</div>
  );
} 
App.propTypes = {
  className: PropTypes.string,
}; 
export default App;