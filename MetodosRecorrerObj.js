let perro = {
  propietario: {
    nombre: "Juan",
    edad: 34,
    lugar: {
      pais: "Chile",
      ciudad: "Santiago de Chile",
    },
  },
  raza: "Pastor Alemán",
  origen: "Alemania",
  pelaje: "Lanudo",
  peso: "30kg",
  edad: 11,
  amigable: true,
};

var keys = Object.keys(perro);
var values = Object.values(perro);
var entries = Object.entries(perro);

console.log(keys);
console.log(values);
console.log(entries);