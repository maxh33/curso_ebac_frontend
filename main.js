var numeroA= parseInt("CampoA");
var numeroB= parseInt("CampoB");
let PrimeiroNumero = document.querySelector("#CampoA");
let SegundoNumero = document.querySelector("#CampoB");

const enviar = document.querySelector("#conferir");

enviar.addEventListener("click", function(){

    if(PrimeiroNumero.value >= SegundoNumero.value){
        alert("Inválido, para proseguir digite um valor maior no segundo campo");
    }   else{
        alert("Pode prosseguir");
    }
})