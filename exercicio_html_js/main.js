document.querySelector("#form").addEventListener("submit", function(event) {
let PrimeiroNumero = document.querySelector("#CampoA");
let SegundoNumero = document.querySelector("#CampoB");

    // Converter os valores dos campos de entrada para números
    let primeiroNumeroConvertido = parseInt(PrimeiroNumero.value);
    let segundoNumeroConvertido = parseInt(SegundoNumero.value);
    
    // Verificar se a conversão foi bem-sucedida
    if (isNaN(primeiroNumeroConvertido) || isNaN(segundoNumeroConvertido)) {
        alert("Por favor, insira valores numéricos válidos.");
        event.preventDefault(); // Impede o envio do formulário
        return;
    }
    // Verificar se o primeiro número é maior que o segundo
    if(primeiroNumeroConvertido >= segundoNumeroConvertido) {
        alert("Inválido, para proseguir digite um valor maior no segundo campo");
        event.preventDefault(); // Impede o envio do formulário
    } else {
        alert("Pode prosseguir");
        // Continua com o envio do formulário
    }
});