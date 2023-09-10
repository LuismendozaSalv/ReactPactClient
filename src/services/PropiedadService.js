import axios from "axios"

export class PropiedadService {
    
    constructor(endpoint) {
        this.endpoint = endpoint;
        if (!endpoint) {
            endpoint = 'http://localhost:5196';
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

    agregarDireccion = (propiedadId, calle, avenida, referencia, latitud, longitud, ciudadId) => {
        console.log('endpoint: ', this.endpoint + '/api/Propiedad/AgregarDireccion');

        return new Promise((resolve, reject) => {
            axios.post(this.endpoint + '/api/Propiedad/AgregarDireccion', {
                propiedadId, 
                calle, 
                avenida, 
                referencia,
                latitud, 
                longitud, 
                ciudadId
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

    agregarFotos = (propiedadId, fotos) => {
        console.log('endpoint: ', this.endpoint + '/api/Propiedad/AgregarFotos');

        return new Promise((resolve, reject) => {
            axios.post(this.endpoint + '/api/Propiedad/AgregarFotos', {
                propiedadId, 
                fotos
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