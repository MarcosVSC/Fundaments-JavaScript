let valor // não inicializada

console.log (valor)

valor = null //ausencia de valor
console.log (valor)

const produto = {}
console.log (produto.preco)

produto.preco = 3.50 
console.log (produto)
console.log (produto.preco)

produto.preco = undefined // evite usar o undefined
console.log (produto)

//delete produto.preco 

produto.preco = null //Sem preco
console.log (!!produto.preco)
console.log (produto)