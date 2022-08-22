import logo from './logo.svg';
import './App.css';
import Example1 from './hooks/example1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example1></Example1>
      </header>
    </div>
  );
}

export default App;
