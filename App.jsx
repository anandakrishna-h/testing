import React from 'react';
import Button from './components/Button';

function App() {
  return <Button label="Click Me" onClick={() => alert('Clicked!')} />;
}

export default App;