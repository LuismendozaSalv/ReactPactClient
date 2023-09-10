import { PactV3, MatchersV3 } from '@pact-foundation/pact';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { PaisService } from '../../services/PaisService.js';
import { crearPaisRequestBody, crearPaisResponse, responsePaisSearch, textoBusquedaPais } from '../PactResponses.js';
const { like } = MatchersV3;
describe('El API de Paises', () => {

    let paisService;
    const provider = new PactV3({
        consumer: 'react-client',
        provider: 'alojamiento-service'
    });

    describe('crear pais', () => {
        it('retorna un id de pais ya creado', () => {
            //Arrange
            provider.given('crear pais')
                .uponReceiving('un accion para crear un pais')
                .withRequest({
                    method: 'POST',
                    path: '/api/Pais',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: crearPaisRequestBody
                }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(crearPaisResponse)
                });
            return provider.executeTest(async mockServer => {
                // Act
                paisService = new PaisService(mockServer.url);
                return paisService.crearPais(crearPaisRequestBody.nombre, crearPaisRequestBody.codigoPais).then((response) => {
                    //Assert
                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).equal(crearPaisResponse);
                });
            });

        });
    });


    describe('buscar paises', () => {
        it('retorna una lista de paises encontrados', () => {
            //Arrange
            provider.given('realizar busqueda de paises')
                .uponReceiving('un pais de busqueda')
                .withRequest({
                    method: 'GET',
                    path: '/api/Pais',
                    query: {
                        searchTerm: textoBusquedaPais
                    },
                }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(responsePaisSearch)
                });
            return provider.executeTest(async mockServer => {
                // Act
                paisService = new PaisService(mockServer.url);
                return paisService.buscarPorNombre(textoBusquedaPais).then((response) => {
                    // Assert

                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).to.deep.equal(responsePaisSearch);
                    expect(response).to.be.an('array');
                    expect(response).to.have.lengthOf(1);
                    const values = response.map((pais) => pais.nombre);
                    expect(values).to.include('Indonesia');                    
                });
            });
        });
    });
});