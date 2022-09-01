import logo from './logo.svg';
import './App.css';
import Example1 from './hooks/example1';
import Example2 from './hooks/example2';
import ComponentWithContext from './hooks/example3';
import Example4 from './hooks/example4';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Example1></Example1> */}
        {/* <Example2></Example2> */}
        {/* <ComponentWithContext></ComponentWithContext> */}
        
        {/* Todo lo que hay dentro de Example4 es tratado como prop.children */}
        {/* <Example4 name={"Sergio"}>
            <h3>Tag h3 como contenido del props.children</h3>
        </Example4> */}
        <Father></Father>
      </header>
    </div>
  );
}

export default App;
