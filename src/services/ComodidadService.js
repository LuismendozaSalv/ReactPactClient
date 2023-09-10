import axios from "axios"

export class ComodidadService {
    
    constructor(endpoint) {
        this.endpoint = endpoint;
        if (!endpoint) {
            endpoint = 'http://localhost:5196';
        }
    }
    CrearComodidad = (nombre, descripcion) => {
        console.log('endpoint: ', this.endpoint + '/api/Comodidad');

        return new Promise((resolve, reject) => {
            axios.post(this.endpoint + '/api/Comodidad', {
                nombre,
                descripcion
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
}