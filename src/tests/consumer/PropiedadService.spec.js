import { PactV3, MatchersV3 } from '@pact-foundation/pact';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { PropiedadService } from '../../services/PropiedadService.js';
import { crearPropiedadRequestBody, crearPropiedadResponse, responsePropiedadSearch, textoBusquedaPropiedad, agregarDireccionRequestBody, 
    agregarFotosRequestBody } from '../PactResponses.js';
const { like } = MatchersV3;
describe('El API de Propiedades', () => {

    let propiedadService;
    const provider = new PactV3({
        consumer: 'react-client',
        provider: 'alojamiento-service'
    });

    describe('crear propiedad', () => {
        it('retorna un id de propiedad ya creado', () => {
            //Arrange
            provider.given('crear propiedad')
                .uponReceiving('un accion para crear una propiedad')
                .withRequest({
                    method: 'POST',
                    path: '/api/Propiedad/CrearPropiedad',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: crearPropiedadRequestBody
                }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(crearPropiedadResponse)
                });
            return provider.executeTest(async mockServer => {
                // Act
                propiedadService = new PropiedadService(mockServer.url);
                return propiedadService.crearPropiedad(crearPropiedadRequestBody.titulo, crearPropiedadRequestBody.descripcion, 
                    crearPropiedadRequestBody.precio, crearPropiedadRequestBody.tipoPropiedad,
                    crearPropiedadRequestBody.personas, crearPropiedadRequestBody.camas, crearPropiedadRequestBody.habitaciones
                ).then((response) => {
                    //Assert
                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).equal(crearPropiedadResponse);
                });
            });

        });
    });


    describe('buscar propiedades por ciudad', () => {
        it('retorna una lista de propiedades encontradas', () => {
            //Arrange
            provider.given('realizar busqueda de propiedades')
                .uponReceiving('una ciudad para busqueda de propiedades')
                .withRequest({
                    method: 'GET',
                    path: '/api/Propiedad/BuscarPropiendadXCiudad',
                    query: {
                        ciudadTerm: textoBusquedaPropiedad
                    },
                }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(responsePropiedadSearch)
                });
            return provider.executeTest(async mockServer => {
                // Act
                propiedadService = new PropiedadService(mockServer.url);
                return propiedadService.buscarPorCiudad(textoBusquedaPropiedad).then((response) => {
                    // Assert

                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).to.deep.equal(responsePropiedadSearch);
                    expect(response).to.be.an('array');
                    expect(response).to.have.lengthOf(3);
                    const values = response.map((propiedad) => propiedad.titulo);
                    expect(values).to.include('Propiedad 3');                    
                });
            });
        });
    });

    describe('agregar direccion', () => {
        it('retorna un id de propiedad enviada', () => {
            //Arrange
            provider.given('agregar direccion')
                .uponReceiving('una accion para agregar una direccion a una propiedad')
                .withRequest({
                    method: 'POST',
                    path: '/api/Propiedad/AgregarDireccion',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: agregarDireccionRequestBody
                }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(crearPropiedadResponse)
                });
            return provider.executeTest(async mockServer => {
                // Act
                propiedadService = new PropiedadService(mockServer.url);
                return propiedadService.agregarDireccion(agregarDireccionRequestBody.propiedadId, agregarDireccionRequestBody.calle, 
                    agregarDireccionRequestBody.avenida, agregarDireccionRequestBody.referencia, agregarDireccionRequestBody.latitud,
                    agregarDireccionRequestBody.longitud, agregarDireccionRequestBody.ciudadId
                ).then((response) => {
                    //Assert
                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).equal(crearPropiedadResponse);
                });
            });

        });
    });

    describe('agregar fotos', () => {
        it('retorna un id de propiedad enviada', () => {
            //Arrange
            provider.given('agregar fotos')
                .uponReceiving('una accion para agregar una fotos a una propiedad')
                .withRequest({
                    method: 'POST',
                    path: '/api/Propiedad/AgregarFotos',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: agregarFotosRequestBody
                }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(crearPropiedadResponse)
                });
            return provider.executeTest(async mockServer => {
                // Act
                propiedadService = new PropiedadService(mockServer.url);
                return propiedadService.agregarFotos(agregarFotosRequestBody.propiedadId, agregarFotosRequestBody.fotos
                ).then((response) => {
                    //Assert
                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).equal(crearPropiedadResponse);
                });
            });

        });
    });
});