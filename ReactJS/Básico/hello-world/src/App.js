import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting.jsx';
import GreetingFunct from './components/pure/greetingFunct.jsx';
import TaskListComponent from './components/container/taskList';
import GreetingStyle from './components/pure/greetingStyle';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Comentario entre llaves ya que es JS*/}
        {/* <Greeting name={"Sergio"}></Greeting>
        <GreetingFunct name={"Sergio"}></GreetingFunct> */}
        <GreetingStyle name={"Sergio"}/>
        {/*Componente de listado de tareas*/}
        {/* <TaskListComponent></TaskListComponent> */}
      </header>
    </div>
  );
}

export default App;
