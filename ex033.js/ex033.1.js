let pessoa = {
    nome:'',
    setNome:function(NovoNome) {
        this.nome = NovoNome
    },
    getNome:function() {
        return 'O nome é ' + this.nome 
    }
}

pessoa.setNome('Breno')

console.log(pessoa.getNome())

