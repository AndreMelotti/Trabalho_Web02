var senha = document.querySelector('.senha')
var btn = document.querySelector('.fa-eye');

btn.onclick= () =>
{
    var inputSenha =document.querySelector("password")

    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type", "text")
    } else {
        inputSenha.setAttribute("type", "password")  
    }

};



 