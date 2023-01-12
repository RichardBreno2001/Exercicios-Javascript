let cachorro = {
    raça:'Sem raça definida',
    latir:function() {
        console.log(`Au Au`)
    },
}

let PastorAlemão = Object.create(cachorro)

console.log(PastorAlemão.raça)

PastorAlemão.raça = 'Pastor alemão'

console.log(PastorAlemão.raça)

PastorAlemão.latir()


