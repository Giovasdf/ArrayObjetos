let arreglo = new Set("Arreglo de string");
console.log(arreglo);

arreglo.delete(" ");
arreglo.delete("d");
arreglo.delete("s");
arreglo.delete("t");
arreglo.delete("i");
arreglo.delete("n");

console.log(arreglo);

arreglo.add("s");
arreglo.add("i");
arreglo.add("m");
arreglo.add("p");
arreglo.add("l");
arreglo.add("e");

console.log(arreglo);

arreglo.forEach(function(elementos){
    console.log(elementos);
}

);