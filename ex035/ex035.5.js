//Criando objeto usando new

function ObjetoPai(valor1,valor2) {
    this.propriedade1 = valor1
    this.propriedade2 = valor2
}

let ObjetoRamificado1 = new ObjetoPai('teste1','teste2')

console.log(ObjetoRamificado1)
console.log(ObjetoRamificado1.propriedade1)

let ObjetoRamificado2 = new ObjetoPai(35248,248213)
console.log(ObjetoRamificado2)



