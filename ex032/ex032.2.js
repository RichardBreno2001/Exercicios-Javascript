let testeJSON = {
    "nome":"Breno",
    "idade":21,
    "linguagens":["Javascript","HTML","CSS"]
}

let converterParaString = JSON.stringify(testeJSON)

console.log(converterParaString)

//Convertendo JSON para string

let converterParaJSON = JSON.parse(converterParaString)

console.log(converterParaJSON)

// Convertendo string para JSON


