//Exercício com array
var num = [5,10,15,20,25,30]
var n1 = 0
num.sort()
num.push(80)
do {
    console.log(`O valor na chave ${n1} é o ${num[n1]}`)
    n1++
} while (n1 < num.length)