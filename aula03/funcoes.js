function msgTeste() {
    console.log('Funcionou que é uma beleza!')
}

msgTeste()

function msgTesteArgumento(param) {
    console.log(`O parâmetro passado foi: ${param}. O seu tipo é ${typeof param}`)
}

msgTesteArgumento('olá')
msgTesteArgumento(80)

function soma (n1,n2) {
    let result;
    
    if(typeof n1 == "number" && typeof n2 == "number") {
        return result = n1 + n2
    }

    return result = "Deu bom não"
}
console.log(soma('13', 17))
console.log(soma(13, 17))

const arrowFunction = () => {
    console.log('Isso é uma função anônima!!')
}

arrowFunction()
