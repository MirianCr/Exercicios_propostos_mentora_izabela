var num1 = prompt('Informe o primeiro numero' )
var num2 = prompt('Informe o segundo numero')
var num3 = prompt('Informe o terceiro numero')

function maiorNumero(){
    if ((num1 > num2) && (num1>num3)){
       alert(`O maior numero é: ${num1}`) 
    } 
    else if ((num2 > num1) && (num2>num3)){
        alert(`O maior numero é: ${num2}`) 
    }
    else if ((num3 > num1) && (num3 > num2)){
        alert(`O maior numero é: ${num3}`) 
    }
    else
     alert('Os numeros são iguais ou nada informado')
    
    
}

maiorNumero();