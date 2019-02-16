//par Nome / Valor
const saudacao = 'Opa Tudo bem?' // contexto léxico 1 

function exec () {
    const saudacao = 'Whazzup bro' // Contexto Léxico 2
return saudacao 
}

// objetos são grupos aninhados de pares Nome /Valor
const Cliente = { 
    nome: 'Marcos',
    idade: '31',
    Peso: '96',
    Endereco: {
        Logradouro: 'Rua Doutor Alfredo Angelo Filho',
        Numero: '843',
        cidade: 'Canoas',
        Bairro: 'Igara',
        UF: 'RS',
        CEP: '92410-535'
    }
}

console.log (saudacao)
console.log (exec ())
console.log (Cliente)