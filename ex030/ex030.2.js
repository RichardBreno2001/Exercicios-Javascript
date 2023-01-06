let nome = 'Breno'
let cidade = 'Curitiba'
let idade = 21

function teste(...dados) {
    if(dados[0] == 'Breno') {
        console.log(`Olá ${dados[0]}`)
    } 
     if (dados[1] == 'Curitiba') {
        console.log(dados[1]) 
    } 
    if (dados[2] == 21) {
        console.log(dados[2])
    }
}

teste(nome,cidade,idade)

