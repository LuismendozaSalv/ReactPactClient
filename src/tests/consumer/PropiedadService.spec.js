import { PactV3, MatchersV3 } from '@pact-foundation/pact';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { PropiedadService } from '../../services/PropiedadService.js';
import { crearPropiedadRequestBody, crearPropiedadResponse, responsePropiedadSearch, textoBusquedaPropiedad } from '../PactResponses.js';
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


    describe('buscar paises', () => {
        it('retorna una lista de paises encontrados', () => {
            //Arrange
            provider.given('realizar busqueda de paises')
                .uponReceiving('un texto de busqueda')
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
});