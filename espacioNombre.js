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
  sonidos: function () {
    console.log("El perro ladra");
  },
  
};

console.log(perro.propietario.nombre);
console.log(perro.propietario.lugar.pais);
console.log(perro.propietario);
