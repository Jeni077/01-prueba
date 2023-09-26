import logo from './logo.svg';
import './App.css';
import { ComponenteHijo } from './Components/ComponenteHijo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
saul
        </a>
        <ComponenteHijo>
      
      </ComponenteHijo>
      </header>
     
    </div>
    
  );
}

export default App;
