import { useState } from 'react';
import './App.css';
import Start from './Start';

function App() {
  const [changeCol, setChangeCol] = useState(true);
  return (
    <div className="App">
      <Start changeCol={changeCol} setChangeCol={setChangeCol} />
    </div>
  );
}

export default App;