let num = {
    valores:'',
    setVal:function(...números) {
        this.valores = números
    },
    getVal:function() {
        return this.valores
    }
}

num.setVal(20,35,98,65,257,77)

console.log(num.getVal())
console.log(num.getVal()[1])
console.log(num.valores[num.valores.length -1])


