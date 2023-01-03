function contador(i) {
    let cont = i
    let SomarContador = function() {
        console.log(cont)
        cont++
    }
    return SomarContador
}

let MeuContador = contador(5)

MeuContador()

MeuContador()

MeuContador()

MeuContador()

MeuContador()







