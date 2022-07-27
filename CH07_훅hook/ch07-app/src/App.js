import logo from './logo.svg';
import './App.css';
import UseState01 from './hooks/1_useState/UseState01';
import UseState02 from './hooks/1_useState/UseState02';
import { StrictMode } from 'react';
import UseState03 from './hooks/1_useState/UseState03';
import UseEffect02 from './hooks/2_useEffect/UseEffect02';
import UseEffect03 from './hooks/2_useEffect/UseEffect03';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <UseState01 />
        <UseState02 />
        <UseState03 />
        <UseEffect02 />
        <UseEffect03 />
      </header>
    </div>
  );
}

export default App;
