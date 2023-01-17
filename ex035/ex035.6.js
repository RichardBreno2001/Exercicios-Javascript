function cachorro(valor1,valor2) {
    this.raça = valor1
    this.cor = valor2
}

let Husky = new cachorro('Husky','Branco')

console.log(Husky)

cachorro.prototype.latir = function() {
    console.log('au au')
}

Husky.latir()

//Adicionando métodos em objetos 