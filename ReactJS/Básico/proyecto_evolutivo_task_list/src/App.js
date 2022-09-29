import './App.css';
import TaskListComponent from './components/container/taskList';
import RegisterFormik from './components/pure/forms/RegisterFormik';

function App() {
  return (
    <div className="App">
        <TaskListComponent/>
        <RegisterFormik></RegisterFormik>
    </div>
  );
}

export default App;
