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
    paisId: "6610ff58-84b8-4f1a-a322-5791162c02b5"
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

export const crearComodidadRequestBody = {
   nombre: "Televisión por Cable",
  descripcion: "Ofrecer una variedad de canales para el entretenimiento de los huéspedes"
};
export const crearComodidadResponse = '"6cc5f70e-ba09-4df7-a757-7adfe2d4a360"';

export const agregarDireccionRequestBody = {
  propiedadId : "6189d331-f0ca-44d0-bff5-5df771e62793",
  calle : "Calle nueva",
  avenida : "Avenida nueva",
  referencia : "Porton cafe",
  latitud : -17.793288643202846,
  longitud : -63.169714912465764,
  ciudadId : "b6e7d66c-d7f9-4af9-9ec0-02f8ccd18654"
}

export const agregarFotosRequestBody = {
  propiedadId : "6189d331-f0ca-44d0-bff5-5df771e62793",
  fotos : [
    {
      url : "https://cdn.pixabay.com/photo/2014/12/22/10/04/lions-577104_1280.jpg"
    },
    {
      url : "https://i.pinimg.com/564x/46/4b/42/464b42dc572c35a579d4c8b8e7c99dc2.jpg"
    }
  ]
}