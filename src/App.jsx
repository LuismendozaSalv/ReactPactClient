import { useState } from 'react'
import './App.css'
import { PaisService } from './services/PaisService.js';
import Buscador from './Buscador';

function App() {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const crearPaisClick = () => {
    console.log('Crear item');
    (new PaisService('http://localhost:5196')).crearPais(codigo, nombre).then((id) => {
      alert('Item creado con id: ' + id);
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <>
      <div><input type="text" placeholder="Nombre" value={nombre} onChange={(e) => { setNombre(e.target.value) }} />
        <input type="text" placeholder="Código" value={codigo} onChange={(e) => { setCodigo(e.target.value) }} />
        <button onClick={crearPaisClick}>Crear Item</button>
      </div>
      <Buscador />
    </>
  )
}

export default App
