//Armazenando uma função em uma variavel 
const imprimisoma = function (a,b){
    console.log (a + b)
}
imprimisoma (5,5)

// Armazenando uma função Arrow em uma Variavel
const soma  = ( a ,b) => {
    return a + b
}
console.log(soma(5,5))

//Retorno implicito 
const subtracao = ( a , b) => a - b
console.log (subtracao(5,4))

const imprimi2 = a => console.log (a) 
imprimi2 ('Muito legal este teste')