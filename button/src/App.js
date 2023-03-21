import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div 
    style={{  marginLeft: '35rem', marginTop: '10rem' }}
    >
      
      <Button data-testid='increment' variant="contained" color="primary" onClick={handleClick}>
        Increment
      </Button>&nbsp;&nbsp;
      <Button data-testid='decrement' variant="contained" color="primary" onClick={handleDecrement}>
        Decrement
      </Button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
