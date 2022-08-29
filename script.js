var area = window.prompt ("Qual área deseja seguir, Front-End, ou Back-End? ");
    
var msg = (`Você gosta do ${area} que legal!`)

alert(msg);

var gosta = window.confirm(`Você gosta de estudar ${area}?`)

function res (){    

    if(area == Front-End){
       alert ("Você pode aprender React ou Vue")
    } else {
        alert("Ou, Como Back-End você pode aprender c# ou Java")
    } 
}
 res()