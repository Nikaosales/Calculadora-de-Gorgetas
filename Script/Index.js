let conta = 0
let gorgeta = 0
let numerodepessoas= 0
let botaodegorgetaatual = 0

function receberconta(){
    conta = Number(document.querySelector("#bill-input").value)
    validardados()
}

function recebergorgeta(numero){
    
    if (botaodegorgetaatual !== 0){
        botaodegorgetaatual.classList.remove("button-selected")
    }
    
    if (numero === 0 ){
        gorgeta = Number(document.querySelector("#tip-input").value)
        validardados()
        return
    }

    gorgeta = numero
    
    botaodegorgetaatual = document.querySelector(`input[value="${numero}%"]`)
    botaodegorgetaatual.classList.add("button-selected")
    document.querySelector("#tip-input").value = ""
    validardados()
}

function ReceberNumeroDePessoas(){
    numerodepessoas = Number(document.querySelector("#people-input").value)
    validardados()
}

function validardados(){
    if ( conta !== 0 && gorgeta !== 0 && numerodepessoas !== 0 ){
        calcularTotais()
    }
    
}

function calcularTotais(){
    const gorgetaporpessoa = conta * ( gorgeta / 100) / numerodepessoas

    const paragrafogorgeta = document.querySelector("#tip-amount_result")
    paragrafogorgeta.innerText = `$${gorgetaporpessoa.toFixed(2)}`

    const totalporPessoa = (conta / numerodepessoas) + gorgetaporpessoa
    const paragrafoTotal = document.querySelector("#total_result")
    paragrafoTotal.innerText =`$${totalporPessoa.toFixed(2)}`
}

function reset(){
    conta = 0 
    document.querySelector("#bill-input").value = ""
    
    gorgeta=0
    if (botaodegorgetaatual !==0){
        botaodegorgetaatual.classList.remove("button-selected")
    }

    document.querySelector("#tip-input").value = ""
    botaodegorgetaatual=0

   numerodepessoas = 0

    document.querySelector("#people-input").value = ""

    const paragrafogorgeta = document.querySelector("#tip-amount_result")
    paragrafogorgeta.innerText = "$0.00"

    paragrafoTotal = document.querySelector("#total_result")
    paragrafoTotal.innerText = "$0.00"
}
