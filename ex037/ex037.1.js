//Setters e getters

class ObjetoPai{
    constructor(valor1,valor2) {
        this.propriedade1 = valor1
        this.propriedade2 = valor2
    }
    set InserirValor(NovoValor) {
        this.propriedade1 = NovoValor
    }
    get RetornarValor() {
        return 'O valor é: ' + this.propriedade1
    }
}
let ObjetoFilho = new ObjetoPai('testando1','testando2')
console.log(ObjetoFilho)
ObjetoFilho.InserirValor = 'VALOR INSERIDO'
console.log(ObjetoFilho.RetornarValor)
