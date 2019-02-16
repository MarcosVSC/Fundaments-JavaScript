const valores = [7.7,8.9,9.8,10]
console.log (valores[0], valores[4]);
valores[4]= 5.5
console.log (valores[2], valores[4])

valores[50] = 1.8
console.log (valores)

console.log (valores.length)

valores.push ({id:3}, false,null,'isso é um texto')
console.log (valores)

console.log (valores.pop())

delete valores[1]
console.log(valores)

console.log(typeof valores)

