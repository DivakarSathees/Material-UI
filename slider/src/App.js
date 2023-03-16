import React, { useState } from 'react';
import { TextField, Slider, Button } from '@material-ui/core';
 function App() {
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(50);
  const [bmi, setBmi] = useState(null);   
const calculateBmi = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    setBmi(bmi.toFixed(2));
  };   return (
<div
style={{ display: 'flex',
flexDirection: 'column',
alignItems: 'center',
marginTop:'8rem'}}
>
  <h1>BMI Calculator</h1>
  <form

  
  >
    <div>
      <label>Height (cm)</label>
      <Slider value={height} min={100} max={250} step={1} onChange={(event, newValue) => setHeight(newValue)} />
      <TextField type="number" value={height} onChange={(event) => setHeight(event.target.value)} />
      </div>
      <div style={{marginTop:'2rem'}}>
        <label>Weight (kg)</label>&nbsp;
        <TextField type="number" value={weight} onChange={(event) => setWeight(event.target.value)} />
        </div>
        <Button variant="contained" color="primary" onClick={calculateBmi} style={{marginTop:"2rem"}}>
          Calculate BMI
</Button>
</form>
      {bmi && <p>Your BMI is: {bmi}</p>}</div>
  );
} export default App;