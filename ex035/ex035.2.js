let objetoPai = {
    nome:'Breno',
    idade:21,
}

let NovoObjeto = Object.create(objetoPai)

console.log(objetoPai.nome)

console.log(NovoObjeto.nome)