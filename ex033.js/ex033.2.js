let cachorro = {
    latir:function() {
        console.log(`Auu`)
    },
    Raças:'',
    setRaça:function(...nome) {
        this.Raças = nome 
    },
    getRaça:function(){
        return 'As raças são :' + this.Raças
    }

}

cachorro.setRaça('Pastor Alemão','Pitbull','Husk Siberiano')

console.log(cachorro.getRaça())

