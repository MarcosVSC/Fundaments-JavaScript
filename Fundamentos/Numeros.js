const peso1 = 1.0 
const peso2 = Number('2.00')
console.log (peso1, peso2)

console.log (Number.isInteger (peso1))
console.log (Number.isInteger (peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.528

const Total = avaliacao1 * peso1 + avaliacao2 * peso2 
const Media = Total / (peso1+peso2)
console.log (Media.toFixed (2))
console.log (Media.toString(2))
console.log (typeof Media)