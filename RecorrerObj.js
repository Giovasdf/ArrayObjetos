let persona = {
    nombre: 'Marcelo Salas',
    edad: 49,
    saludar: () => {
    return "Buena matador!";
    }
 };

 for (propiedad in persona){
    console.log(propiedad);
 }