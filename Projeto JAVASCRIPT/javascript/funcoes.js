    function somar(){
        var num1;//declaração de variáveis
        var num2;
        var res;
        //coletar os dados do formilário
        num1 = parseInt(document.getElementById("num1").value);
        num2 = parseInt(document.getElementById("num2").value);
    }

        function subtrair(){
            var num1;//declaração de variáveis
            var num2;
            var res;
            //coletar os dados do formilário
            num1 = parseInt(document.getElementById("num1").value);
            num2 = parseInt(document.getElementById("num2").value);
             
            res = num1 - num2;
            document.getElementById("resultado").innerHTML = res;
        //realizar o calculo
        if(num <= 0){
            res = "Impossivel dividir por zero";
        }else{
            res = num1 / num2;  
        }
        
        res = num1 + num2;
        document.getElementById("resultado").innerHTML = res;
    }//fim do método somar


    function tabuada(){
        var num1;
        var num2; 
        
        //coletar os número
        num1 = parseInt(document.getElementById("num1").value);
        num2 = parseInt(document.getElementById("num2").value);

        var resNum1 = "tabuada do " + num1;
        var resNum2 = "tabuada do " + num2;


        for(i=0;i<=10;i++){
            resNum1 += "\n" +  num1 + " * " + i + " = " + (num1 * i);
            resNum2 += "\n" +  num2 + " * " + i + " = " + (num2 * i);
        }

        document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n" + resNum2;
    }//fim do metodo tabuada 

    function potencia(){
        var num1;
        var num2;
        var res
        //coletar os dados do formulario
        num1 = parseInt(document.getElementById("num1").value);
        num1 = parseInt(document.getElementById("num2").value);
        //realizar o calculo
        res = Math.pow(num1,num2)//calculo a potencia
        document.getElementById("resultado").innerHTML = res;   
    }//fim do metodo 

    function raiz(){
        var num1;
        var num2;
        var res
        //coletar os dados do formulario
        num1 = parseInt(document.getElementById("num1").value);
        num1 = parseInt(document.getElementById("num2").value);

        resNum1 = Math.sqrt(num1);
        resNum2 = math.sqrt(num2);

        document.getElementById("resultado").innerHTML =
        "\n" + resNum1 + "\n" + resNum2;

    }//fim do metodo    