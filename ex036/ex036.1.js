// Tratamento de input

function ChecarNumero(valor) {
    let num = Number(valor)
    if(Number.isNaN(num)) {
        return 'Não é um número'
    } else {
        return 'É um número'
    }
}
console.log(ChecarNumero(10))
console.log(ChecarNumero('teste'))

