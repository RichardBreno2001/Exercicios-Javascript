class ObjetoPai {
    constructor(valor1,valor2) {
        this.propriedade1 = valor1
        this.propriedade2 = valor2
    }
    método(){
        console.log('método adicionado')
    }
}

ObjetoPai.prototype.propriedade1 = 'VALOR INDEFINIDO'
ObjetoPai.prototype.propriedade2 = 'VALOR INDEFINIDO 2'

let ObjetoFilho = new ObjetoPai('teste1','teste2')

ObjetoFilho.método()
console.log(ObjetoFilho)

let ObjetoFilho2 = new ObjetoPai()

console.log(ObjetoFilho2)

console.log(ObjetoPai.prototype.propriedade1)
console.log(ObjetoPai.prototype)



