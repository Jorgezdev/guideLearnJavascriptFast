// Instalar axios para hacer llamadas de servicios externos (HTTP requests) y node-fetch para hacer llamadas a servicios externos (HTTP requests) en Node.js
// npm i axios 
import axios from 'axios';
// aqui pegamos la url de donde queremos extraer la informacion
axios.get('https://pokeapi.co/api/v2/pokemon/mewtwo')
    .then(function (response) {
        // handle success
        console.log("Success");
        console.log(response.data);
    })
    // añadimos .data a response para obtener solo la data que nos interesa, ya que response trae mucha informacion que no necesitamos
    .catch(function (error) {
        // handle error
        console.log("Error");
        console.log(error);
    })
    .then(function () {
        // always executed
    });
    
     

    // para hacer la llamada ahora ejecutamos en la consola: npm start (configuraomos en package.json que  para llamadas de script lo hacemos con el comando start :
//    "scripts": {
//    "start": "node index.js"
//  },)

