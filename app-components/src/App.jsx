import { useState } from 'react';
import Button from './Components/Button';

function App() {
  return (
    <>
      <h1>Components</h1>
      <Button
        label={'Click'}
        clicHandler={() => {
          alert('Hello friend');
        }}
        disabled={false}
      />
    </>
  );
}

export default App;
