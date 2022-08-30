import logo from './logo.svg';
import './App.css';
import  ContactComponentA  from './components/pure/contact';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactComponentA></ContactComponentA>
      </header>
    </div>
  );
}

export default App;
