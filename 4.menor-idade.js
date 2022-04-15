 var idade =parseInt(prompt ("Informe a sua idade: "));



if (isNaN(idade)) alert("O número informado não é válido! Tente novamente...") 
   
else if(idade < 18)alert(`Voce é menor de idade, pois voce tem ${idade} anos.`)
   
else alert(`Voce já é maior de idade! Sua idade é ${idade} anos `)
 

//============================================================
//resolucao
    //  var idade = parseInt(prompt("Informe a sua idade", "18"));
    //  if (idade.isNaN) mensagem = "O número informado não é válido!"
    //  else
    //  if (idade < 18) mensagem = "A idade informada é de um menor!"
    //  else
    //  mensagem = "Se não estiver mentindo é maior de idade!";
    // alert(mensagem);

/*
Vamos lá, isso que aconteceu é uma das bizarrices do javascript rsrs

Quando você usa o parseInt, ele converte o valor para inteiro. Porém nesse caso não deveria converter porque está recebendo uma string. 
Se você for pegar o tipo da variavel usando o typeof(idade) vai ver que ele retorna "number" (erroneamente), mas se você só chamar a idade vai ver que o resultado vai ser um NaN (not a number). Por isso que da essa confusão.

Para resolver isso você pode fazer assim, no seu if ao inves de usar idade.isNaN, você chama a função isNaN passando a idade, fica assim:

if (isNaN(idade)) {
    mensagem = "O número informado não é válido!"
} else if (idade < 18) {
    mensagem = "A idade informada é de um menor!"
} else {
    mensagem = "Se não estiver mentindo é maior de idade!";
};*/
