const prod1 = {}
prod1.nome = 'Celular da Turma do Chaves'
prod1.preco = 899.90
prod1['descoonto legal' ]= 0.40 //evitar atributos com espaço


console.log (prod1)

const prod2 ={
   nome:  'Camisa polo',
   preco:  79.90,
   marca: 'Lacoste',
   Tamanho: 'GG'
   
}
console.log (prod1, prod2)


const prod3 = {
    nome: 'computador Top Top',
    preco: 5499.60,
    marca: {nome:'Lacoste' 
},
    tamanh: { tamanho: 'P'}
}


//objeto não é JASON exemplo de JASOM:

'{"nome": "Camisa Polo" , "preco": 79.90}'