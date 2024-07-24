let perros = [
    { raza: 'Pastor Alemán', origen: 'Alemania', pelaje: 'Lanudo', peso: '33kg', edad: 12 }, 
    { raza: 'Poodle', origen: 'Francia', pelaje: 'Lanudo', peso: '20kg', edad: 14 }, 
];

var texto = "<tr> <th>Raza</th> <th>Origen</th> <th>Pelaje</th> <th>Peso</th>  <th>Edad</th> </tr>";

for(var i = 0; i < perros.length; i++){
    texto += `
        <tr>
            <td>${perros[i].raza}</td>
            <td>${perros[i].origen}</td>
            <td>${perros[i].pelaje}</td>
            <td>${perros[i].peso}</td>
            <td>${perros[i].edad}</td>
        </tr>
    `;
}
document.getElementById("cuerpo-tabla").innerHTML = texto;