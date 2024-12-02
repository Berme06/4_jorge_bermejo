function cambiarColor() {
    var div = document.getElementById('color');
    var divColor = div.style.backgroundColor;

    if (divColor == "white") {
        div.style.backgroundColor = "pink";
    } 
    else if (divColor == "pink") {
        div.style.backgroundColor = "blue";
    } 
    else {
        div.style.backgroundColor = "white";
    }
}

function hola() {
    document.getElementById("color").innerHTML += " HOLA!";
}
function adios() {
    document.getElementById("color").innerHTML += " ADIOS!";
}