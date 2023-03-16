import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div 
    style={{  marginLeft: '40rem', marginTop: '10rem' }}
    >
      
      <Button data-testid='button' variant="contained" color="primary" onClick={handleClick}>
        Click me
      </Button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
