import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting.jsx';
import GreetingFunct from './components/pure/greetingFunct.jsx';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Comentario entre llaves ya que es JS*/}
        <Greeting name={"Sergio"}></Greeting>
        <GreetingFunct name={"Sergio"}></GreetingFunct>
      </header>
    </div>
  );
}

export default App;
