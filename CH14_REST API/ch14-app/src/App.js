import logo from './logo.svg';
import './App.css';
import MainPage from './StyledComponents/MainPage';
import Company from './company/Company';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Company />
      </header>
    </div>
  );
}

export default App;
