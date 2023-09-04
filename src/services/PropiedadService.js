import axios from "axios"

export class PropiedadService {
    
    constructor(endpoint) {
        this.endpoint = endpoint;
        if (!endpoint) {
            endpoint = 'https://localhost:7062';
        }
    }
    crearPropiedad = (titulo, descripcion, precio, tipoPropiedad, personas, camas, habitaciones) => {
        console.log('endpoint: ', this.endpoint + '/api/Propiedad/CrearPropiedad');

        return new Promise((resolve, reject) => {
            axios.post(this.endpoint + '/api/Propiedad/CrearPropiedad', {
                titulo,
                descripcion,
                precio,
                tipoPropiedad,
                personas,
                camas,
                habitaciones
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
    buscarPorCiudad = (texto) => {
        return new Promise((resolve, reject) => {
            axios.get(this.endpoint + '/api/Propiedad/BuscarPropiendadXCiudad', {
                params: {
                    ciudadTerm: texto
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