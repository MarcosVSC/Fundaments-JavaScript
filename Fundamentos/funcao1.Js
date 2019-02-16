// Função sem retorno

function imprimirsoma (a,b) {
    console.log (a + b)
}
imprimirsoma (5,6)
imprimirsoma(2)
imprimirsoma(10,5,8,9,16,66)
imprimirsoma('meu ','Teste')

// Função com Retorno
function soma ( a, b){
    return a + b 
}

console.log (soma(6,6))

function soma ( a, b = 1){
    return a + b 
}

console.log (soma(6))