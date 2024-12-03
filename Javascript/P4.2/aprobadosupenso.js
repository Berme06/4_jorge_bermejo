function calcularNotaFinal(){
    //recuperamos los valores introducidos por el usuario para las notas de primera evaluación y segunda evaluación
    var notaPrimeraEv = document.getElementById("nota_primera_ev").value;
    console.log("Nota primer input: " + notaPrimeraEv);

    var notaSegundaEv = document.getElementById("nota_segunda_ev").value;
    console.log("Nota segundo input: " + notaSegundaEv);
    var divResultado = document.getElementById("resultado");
    //en la variable notaFinal guardamos (notaPrimeraEv + notaSegundaEv) / 2

    var notaFinal = calcularMedia(notaPrimeraEv, notaSegundaEv);
    console.log("Nota media: " +  notaFinal);

    var nombre = document.getElementById("nombre").value;
    console.log("")

    if(notaFinal >= 5){
        divResultado.style.backgroundColor = "green";
        divResultado.innerHTML = "Has aprobado, " + nombre + ". Tu nota es: " + notaFinal;
        //TODO: recuperar por id el elemento resultado, y asignar a su propiedad innerHTML el texto "APROBADO :)"
        //TODO: recuperar por id el elemento resultado y asignar a su propiedad style.backgroundColor el color "green"
    } 
    else{
        divResultado.style.backgroundColor = "red";
        divResultado.innerHTML = "Has suspendido, " + nombre + ". Tu nota es: " + notaFinal;                  
        //TODO: recuperar por id el elemento resultado, y asignar a su propiedad innerHTML el texto "VUELVE A INTENTARLO :("
        //TODO: recuperar por id el elemento resultado y asignar a su propiedad style.backgroundColor el color "red"
    }
}
function calcularMedia (valor1, valor2){
    return (parseInt(valor1) + parseInt(valor2))/2;
}
