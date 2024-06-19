function bissexto(){
 
    var ano;//Declarar Variavel
 
    //Coletar Dados
 
    ano = parseInt(document.getElementById("ano").value);
 
    //Realizar a Conta
 
    if(ano % 4 == 0){
        res = "O Ano é Bissexto"
    }
    else{
        res = "Não é Ano Bissexto";
    }
    document.getElementById("resultado").innerHTML = res;
}