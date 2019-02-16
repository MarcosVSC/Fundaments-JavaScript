isAtivo = true
console.log (isAtivo)

isAtivo = 1 
console.log (!!isAtivo)

console.log ('Os verdadeiros .......')
console.log (!!3)
console.log(!!-1)
console.log(!!' ')
console.log (!![])
console.log (!!{})
console.log(!!Infinity)
console.log (!!(isAtivo = Infinity))

console.log ('Os falsos......')
console.log (!!0)
console.log (!!'')
console.log (!!null)
console.log (!!NaN)
console.log (!!undefined)
console.log (!!(isAtivo = false))

console.log ('Para Finalizar........')
// || esse simbolo é o famoso OU 

console.log (!!('' || null || 0 || 'epa' || 123)) // se houver um verdadedeiro a sentenca sera verdadeira.
console.log ('' || null || 0 || 'epa' || 123) // trará o primeiro verdadeiro que encontrar

/* Comportamentos
vamos criar a  variavel nome e imprimir se houver ome se não desconhecido*/ 
let nome = ''

console.log (nome || 'Desconhecido')

nome = 'lucas'
console.log (nome || 'Desconhecido')

