// var nombre = prompt("Dime tu nombre");
// var instituto = prompt("Nombre de instituto")

// console.log(nombre);

// document.write("<h1>"+ nombre + "</h1>");

// document.write("<table border=\"1\">");
// document.write("<tr><th>Nombre</th><th>Instituto</th></tr>");
// document.write("<tr><td>" + nombre + "</td><td>" + instituto + "</td></tr>");
// document.write("</table>");

// var nota1 = 5;
// var nota2 = 4;
// var nota3 = 7;

function mostrarFecha(){
var now = Date();
console.log("Ahora son: " + now);
//alert("Ahora son las: " + now);
document.write("<h1>" + now + "</h1>");
}
//Cambiar estilos de div con id micaja hago click en el botón boton1
document.getElementById("boton1").onclick = () => {
    console.log("Click sobre el boton 1...");
    mostrarFecha();
}
//Cambiar estilos de div con id con miCaja cuando paso el raton por encima
var miCaja = document.getElementById("micaja");
    miCaja.onmouseenter = () => {
    miCaja.style.backgroundColor = "green";
    miCaja.style.fontSize = "40px";
}
//Cambiar el texto del div id micaja cuando salgo encima del elemento
miCaja.onmouseleave = () => {
   miCaja.innerHTML = "Hasta Luego";
}
document.getElementById("micaja").style.fontSize = "10px";


function changeFontSize(){
    var miCaja = document.getElementById("micaja");
    var fontSizeMiCaja = miCaja.style.fontSize;
    console.log("mi caja font size" + fontSizeMiCaja);

    //Si el tamaño de la letra actual, es de 10 px lo pongo a 12px
     if(fontSizeMiCaja == "10px")
    {

        miCaja.style.fontSize = "12px";
    }  
    //Si el tamaño de letra actual es de 12px, lo pongo a 14px
     else if(fontSizeMiCaja == "10px")
    {
    miCaja.style.fontSize = "24px";
    }
    //Si el tamaño de la letra actual no cumple ninguna de las condiciones de arriba, // lo pongo a 10 px
    else
    {

        miCaja.style.fontSize = "10px";
    }
} 
//1. Recuperamos el botón de cambiar el tamaño 
var botonChangeFont = document.getElementById("botonChangeFont");
//2. Asociamos el evento al onclick el botón de cambiar tamaño
bottonChangeFont.onclick = () => {
    //3.Llamamos a la función de cambiar tamaño de la letra
 changeFontSize();
}




