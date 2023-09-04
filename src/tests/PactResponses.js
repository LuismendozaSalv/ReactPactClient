export const crearPaisRequestBody = {
    nombre: 'Pais de prueba',
    codigoPais: 'PB'
};
export const crearPaisResponse = '"6cc5f70e-ba09-4df7-a757-7adfe2d4a360"';
export const responsePaisSearch = [
    {
      "id": "b9c87533-baca-4e32-9f50-26539a4129a9",
      "nombre": "Indonesia",
      "codigoPais": "ID"
    }
];

export const crearItemResponse = '"6cc5f70e-ba09-4df7-a757-7adfe2d4a360"';
export const crearTransaccionResponse = '"6cc5f70e-ba09-4df7-a757-7adfe2d4a360"';
export const crearItemRequestBody = {
    codigo: '123',
    nombre: 'item de prueba'
};
export const responseItemSearch = [
    {
        "itemId": "22ce4c2f-510f-4f9b-a6c1-40869a1181de",
        "nombre": "asdasd",
        "codigo": "asdasd",
        "stock": 0
    },
    {
        "itemId": "21fcfd5b-91c0-4cf3-a257-f4b93c1ef623",
        "nombre": "asd",
        "codigo": "dsa",
        "stock": 0
    }
];
export const textoBusqueda = 'asd';
export const textoBusquedaPais = 'Indo';
export const crearTransaccionRequestBody = {
    "items": [
        {
            "id": "21fcfd5b-91c0-4cf3-a257-f4b93c1ef623",
            "costoUnitario": 10,
            "cantidad": 20
        }
    ],
    "tipo": 0,
    "crearYConfirmar": true
}
export const textoBusquedaCiudad = 'Cochabam';
export const crearCiudadRequestBody = {
    nombre: "San Jose",
    paisId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
};
export const crearCiudadResponse = '"6cc5f70e-ba09-4df7-a757-7adfe2d4a360"';
export const responseCiudadSearch = [
    {
        "id": "0929d34e-1dc4-43a9-85c0-a181e9abcbdc",
        "nombre": "Cochabamba",
        "paisId": "6f48094b-66fe-49d2-99f6-9a2a7db87406",
        "nombrePais": "Bolivia"
    }
];
export const textoBusquedaPropiedad = 'Santa Cruz';
export const crearPropiedadRequestBody = {
    titulo: "Titulo propiedad",
    descripcion: "Esta es una propiedad de prueba",
    precio: 200,
    tipoPropiedad: 0,
    personas: 10,
    camas: 5,
    habitaciones: 5
  };
export const crearPropiedadResponse = '"6cc5f70e-ba09-4df7-a757-7adfe2d4a360"';
export const responsePropiedadSearch = [
    {
      "titulo": "Propiedad 3",
      "descripcion": "Descripcion 3",
      "precio": 20,
      "personas": 10,
      "camas": 5,
      "habitaciones": 5,
      "fotos": [
        {
          "url": "https://hips.hearstapps.com/hmg-prod/images/one-bed-cottage-for-sale-bath-1674727199.jpg"
        }
      ]
    },
    {
      "titulo": "Propiedad 1",
      "descripcion": "Descripcion 1",
      "precio": 200,
      "personas": 10,
      "camas": 5,
      "habitaciones": 5,
      "fotos": [
        {
          "url": "https://images.adsttc.com/media/images/5771/cc2a/e58e/ce0a/2700/007f/large_jpg/CASAU_CROQUIS_03.jpg?1467075583"
        }
      ]
    },
    {
      "titulo": "Propiedad 3",
      "descripcion": "Descripcion 3",
      "precio": 20,
      "personas": 10,
      "camas": 5,
      "habitaciones": 5,
      "fotos": [
        {
          "url": "https://hips.hearstapps.com/hmg-prod/images/one-bed-cottage-for-sale-bath-1674727199.jpg"
        }
      ]
    }
  ];