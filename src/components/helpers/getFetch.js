const productos = [
    { id : 1, nombre: 'Barcelona',precio: 5200},
    { id : 2, nombre: 'Paris', precio: 5500},
    { id : 3, nombre: 'ManchesterCity', precio: 5000},
    { id : 4, nombre:'RealMadrid', precio: 5100},
    { id : 5, nombre:'Chelsea', precio: 4900},
    { id : 6, nombre:'Juventus', precio: 5700},
    { id : 7, nombre:'Liverpool', precio: 5800},
    { id : 8, nombre:'Bayern', precio: 5200},
    { id : 9, nombre:'Olympique',precio: 5300},
    { id : 10,nombre:'Milan',precio: 5700 },
];

export const getFetch = new Promise ((aceptado, rechazada)=> {
    setTimeout (()=>{
        aceptado(productos)
    },3000);
})