function CriarObjeto(prop1,prop2,prop3) {
    let ObjetoBase = Object.create({})
    ObjetoBase.prop1 = prop1
    ObjetoBase.prop2 = prop2
    ObjetoBase.prop3 = prop3
    return ObjetoBase
}

let NovoObjeto = CriarObjeto('Valor1','Valor2','Valor3')

console.log(NovoObjeto)
//Criando um objeto com propriedades pré-definidas a partir de uma função