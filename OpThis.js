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
  datos: function(){
    console.log(`La raza del perro es ${this.raza}, tiene una edad de ${this.edad} años 
        y el propietario es ${this.propietario.nombre}`);
  }
};

perro.datos();