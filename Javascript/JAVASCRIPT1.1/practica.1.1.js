function cambiarColor(){
    var div = document.getElementById("antonio");
    var divColor = div.style.backgroundColor;
    si(divColor == "black"){
        div.style.backgroundColor = "pink";
    }
    sinosi(divColor == "pink){
        div.style.backgroundColor = "blue";
    }
     sino{
        div.style.backgroundColor = "black";
}
document.getElementById("color").onclick = () => {
    console.log("Click sobre el boton 1...");
    cambiarColor();
}