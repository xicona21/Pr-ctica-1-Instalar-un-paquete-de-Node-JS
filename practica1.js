const { toCelsius } = require('celsius'); //Se utiliza el codigo del apartado celsius
const { toFahrenheit } = require('celsius'); //Se utiliza el codigo del apartado fahrenheit
const temperatura = require ('celsius'); //Manda a llamar todo lo del archivo celsius

console.log(toCelsius(100)); //toCelsius llama las conversiones de celsius

console.log(toCelsius(100, 3)); 

console.log(toCelsius('105.981 degrees F', 5)); 

console.log(toFahrenheit(36)); //toFahrenheit llama las conversiones de fahrenheit

console.log(toFahrenheit(36.68, 3)); 

console.log(toFahrenheit('-40.691 degrees C', 5)); 


console.log(temperatura.toCelsius(20));

console.log(temperatura.toFahrenheit(30));