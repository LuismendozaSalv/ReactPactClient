import { PactV3, MatchersV3 } from '@pact-foundation/pact';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { CiudadService } from '../../services/CiudadService.js';
import { crearCiudadRequestBody, crearCiudadResponse, responseCiudadSearch, textoBusquedaCiudad } from '../PactResponses.js';
const { like } = MatchersV3;
describe('El API de Ciudades', () => {

    let ciudadService;
    const provider = new PactV3({
        consumer: 'react-client',
        provider: 'alojamiento-service'
    });

    describe('crear ciudad', () => {
        it('retorna un id de ciudad ya creado', () => {
            //Arrange
            provider.given('crear ciudad')
                .uponReceiving('un accion para crear un ciudad')
                .withRequest({
                    method: 'POST',
                    path: '/api/Ciudad',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: crearCiudadRequestBody
                }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(crearCiudadResponse)
                });
            return provider.executeTest(async mockServer => {
                // Act
                ciudadService = new CiudadService(mockServer.url);
                return ciudadService.crearCiudad(crearCiudadRequestBody.nombre, crearCiudadRequestBody.paisId).then((response) => {
                    //Assert
                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).equal(crearCiudadResponse);
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
                    path: '/api/Ciudad',
                    query: {
                        searchTerm: textoBusquedaCiudad
                    },
                }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(responseCiudadSearch)
                });
            return provider.executeTest(async mockServer => {
                // Act
                ciudadService = new CiudadService(mockServer.url);
                return ciudadService.buscarPorNombre(textoBusquedaCiudad).then((response) => {
                    // Assert

                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).to.deep.equal(responseCiudadSearch);
                    expect(response).to.be.an('array');
                    expect(response).to.have.lengthOf(1);
                    const values = response.map((ciudad) => ciudad.nombre);
                    expect(values).to.include('Cochabamba');                    
                });
            });
        });
    });
});