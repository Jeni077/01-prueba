import './App.css';
import miImagen from './Components/2.png';
import { ComponenteHijo } from './Components/ComponenteHijo';
import { hijo } from './Components/ComponenteHijo';


function App() {
  return (

    <div className="App">
      <header className="App-header">

      <img src={miImagen} className="App-logo"alt="Mi Imagen" />

        <p>
          Hola mundo
        </p>
        <a
        
        >
Texto
        </a>
     
        <ComponenteHijo>
        <hijo />
      </ComponenteHijo>
      
      </header>
     
    </div>
    
  );
}

export default App;
