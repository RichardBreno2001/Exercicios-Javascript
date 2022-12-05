let nome = 'Breno'

for(let n1 = 0; n1<=20; n1++) {
    if(n1==5) {
        nome = 'João'
    }



    if(n1==5 && nome=='João') {
        console.log(`O nome é João, pode parar.`)
        break
    }
}

