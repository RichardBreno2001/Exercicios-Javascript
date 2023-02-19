let P_errada = Promise.resolve(new Error('Algo deu errado'))

P_errada.then((value)=> {
    console.log(value)
})

P_errada.catch(reason=>{
    console.log('ERROR: ' + reason)
})

