let perro = {
  raza: "Pastor Alemán",
  origen: "Alemania",
  pelaje: "Lanudo",
  peso: "33kg",
  edad: 12,
  amigable: true,
  sonidos: function () {
    console.log("El perro ladra");
  },
};

perro.peso = "50kg";
perro.edad = 7;
perro.amigable = false;
perro.raza = "Chihuahua";

//objeto.propiedad
console.log(perro.raza);
console.log(perro.peso);
console.log(perro.amigable);
console.log(perro.sonidos());

// console.log(perro['raza']);
// console.log(perro['peso']);
// console.log(perro['amigable']);