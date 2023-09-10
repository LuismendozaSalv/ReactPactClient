import { PactV3, MatchersV3 } from '@pact-foundation/pact';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { ComodidadService } from '../../services/ComodidadService.js';
import { crearComodidadRequestBody, crearComodidadResponse } from '../PactResponses.js';
const { like } = MatchersV3;
describe('El API de Comodidades', () => {

    let comodidadService;
    const provider = new PactV3({
        consumer: 'react-client',
        provider: 'alojamiento-service'
    });

    describe('crear comodidad', () => {
        it('retorna un id de comodidad ya creado', () => {
            //Arrange
            provider.given('crear comodidad')
                .uponReceiving('un accion para crear un comodidad')
                .withRequest({
                    method: 'POST',
                    path: '/api/Comodidad',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: crearComodidadRequestBody
                }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(crearComodidadResponse)
                });
            return provider.executeTest(async mockServer => {
                // Act
                comodidadService = new ComodidadService(mockServer.url);
                return comodidadService.CrearComodidad(crearComodidadRequestBody.nombre, crearComodidadRequestBody.descripcion).then((response) => {
                    //Assert
                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).equal(crearComodidadResponse);
                });
            });

        });
    });
});