// Novo recusros do ES2015
 const pessoa = {
     nome: 'Ana',
     idade: '18',
     endereco: {
         logradouro: 'Maua',
        numero: 1684
     }
 }
 const  { nome , idade} = pessoa
 console.log ( nome, idade)
 const {nome: n , idade: i} = pessoa
 console.log (n,i)

 const {sobrenome, bemhumorada = true} = pessoa
 console.log (sobrenome , bemhumorada)

 const {endereco: {logradouro , numero ,cep }} = pessoa
 console.log (logradouro , numero, cep)

 const { conta: { ag , num}} = pessoa
 console.log ( ag ,num)