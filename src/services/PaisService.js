import axios from "axios"

export class PaisService {
    
    constructor(endpoint) {
        this.endpoint = endpoint;
        if (!endpoint) {
            endpoint = 'https://localhost:7062';
        }
    }
    crearPais = (nombre, codigoPais) => {
        console.log('endpoint: ', this.endpoint + '/api/Pais');

        return new Promise((resolve, reject) => {
            axios.post(this.endpoint + '/api/Pais', {
                nombre,
                codigoPais
            },{
                timeout: 30000,
                headers: {
                    'Accept': 'application/json'
                }
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                console.log('error: ' + error);
                reject(error);
            });
        });
    }
    buscarPorNombre = (texto) => {
        return new Promise((resolve, reject) => {
            axios.get(this.endpoint + '/api/Pais', {
                timeout: 30000,
                params: {
                    searchTerm: texto
                }
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                console.log('error: ' + error);
                reject(error);
            });
        });
    }
}