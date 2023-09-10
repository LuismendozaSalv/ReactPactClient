import axios from "axios"

export class CiudadService {
    
    constructor(endpoint) {
        this.endpoint = endpoint;
        if (!endpoint) {
            endpoint = 'http://localhost:5196';
        }
    }
    crearCiudad = (nombre, paisId) => {
        console.log('endpoint: ', this.endpoint + '/api/Ciudad');

        return new Promise((resolve, reject) => {
            axios.post(this.endpoint + '/api/Ciudad', {
                nombre,
                paisId
            },{
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
            axios.get(this.endpoint + '/api/Ciudad', {
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