import React, { useState } from 'react'
import { PaisService } from './services/PaisService';

const Buscador = () => {
    const [texto, setTexto] = useState('');
    const clickBuscar = () => {
        (new PaisService('https://localhost:7062')).buscarPorNombre(texto)
            .then((lista) => {
                alert('Se encontraron ' + lista.length + ' items');
                console.log(lista);
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <input placeholder='Buscar' value={texto} onChange={(e) => setTexto(e.target.value)} />
            <button onClick={clickBuscar}>Buscar</button>
        </div>
    );
}

export default Buscador;