import './App.css';
import TaskListComponent from './components/container/taskList';
import LoginFormik from './components/pure/forms/loginForm';

function App() {
  return (
    <div className="App">
        <TaskListComponent/>
        <LoginFormik></LoginFormik>
    </div>
  );
}

export default App;
