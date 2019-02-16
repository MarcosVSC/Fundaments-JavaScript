console.log (Math.ceil(6.1))

const obj = {}
obj.nome = 'Bola'
obj ['nome'] = 'Bola2'
console.log (obj.nome)

function Obj (nome) {
this.nome = nome
this.exec  = function () {
console.log('Exec....')
}
}
//This faz com que o objeto fique visivel fora do escopo
const  Obj2  = new Obj ('Cadeira')
const Obj3 = new Obj ('Mesa')
console.log (Obj2.nome)
console.log (Obj3.nome)
Obj3.exec()