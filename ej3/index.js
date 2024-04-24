const numeros = [2, 3, 101, 201, 202, 100]

const number = require('./numeros.js');

const Logger = require('logplease');
const logger = Logger.create('utils');


console.log(number.esPar(8));

const loggerNumber = () => {
    numeros.forEach(num =>{
        if(number.esPar(num) == true){
             logger.info(num +' El número es par');
        }else{
             logger.error(num + ' el número no es Par')
        }
        //number.esPar(num) ? logger.info(num +' El número es par') : logger.error(num + ' el número no es Par') ;
    })
  
}
loggerNumber()