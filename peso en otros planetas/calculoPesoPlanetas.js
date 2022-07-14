function obtenerPeso() {
    var usuario = document.getElementById("pesoUsuario").value;
    var peso = parseFloat(usuario);
    alert("Ingresaste que tu peso es de "+peso+"kg");
    return peso;
}

function calcularPeso() {
    var select = document.getElementById("planetas");
    //var options =document.getElementsByTagName("option");
    //alert(select.options[select.selectedIndex].text);
    //var usuario = document.getElementById("pesoUsuario").value;
    var opcion = parseInt(select.value);
    var gTierra = 9.8, gMercurio = 3.7, gVenus = 8.87, gMarte = 3.7, gJupiter = 24.8, gSaturno = 10.44, gUrano = 8.87, gNeptuno = 11.15, gLuna = 1.62;
    var peso = parseInt(document.getElementById("pesoUsuario").value);
    var pesoFinal;
    switch (opcion) {
        case 1:
            if (isNaN(peso) == true) {
                alert("Lo siento, pero no ingresaste tu peso en la tierra. Vuelve a intentarlo!");
                }else{
                pesoFinal = peso*gMercurio/gTierra;
                pesoFinal = parseFloat(pesoFinal).toFixed(2);
                alert("Tu peso en MERCURIO es de: "+pesoFinal+"Kg.");
                }
                break;
        case 2:
            if (isNaN(peso) == true) {
                alert("Lo siento, pero no ingresaste tu peso en la tierra. Vuelve a intentarlo!");
                }else{
                pesoFinal = peso*gMarte/gVenus;
                pesoFinal = parseFloat(pesoFinal).toFixed(2);
                alert("Tu peso en VENUS es de: "+pesoFinal+"Kg.");
                }
                break;
        case 3:
            if (isNaN(peso) == true) {
                alert("Lo siento, pero no ingresaste tu peso en la tierra. Vuelve a intentarlo!");
                }else{
                pesoFinal = peso*gMarte/gTierra;
                pesoFinal = parseFloat(pesoFinal).toFixed(2);
                alert("Tu peso en Marte es de: "+pesoFinal+"Kg.");
                }
                break;
        case 4:
            if (isNaN(peso) == true) {
                alert("Lo siento, pero no ingresaste tu peso en la tierra. Vuelve a intentarlo!");
                }else{
                pesoFinal = peso*gJupiter/gTierra;
                pesoFinal = parseFloat(pesoFinal).toFixed(2);
                alert("Tu peso en JUPITER es de: "+pesoFinal+"Kg.");
                }
                break;
        case 5:
            if (isNaN(peso) == true) {
                alert("Lo siento, pero no ingresaste tu peso en la tierra. Vuelve a intentarlo!");
                }else{
                pesoFinal = peso*gSaturnoo/gTierra;
                pesoFinal = parseFloat(pesoFinal).toFixed(2);
                alert("Tu peso en SATURNO es de: "+pesoFinal+"Kg.");
                }
                break;
        case 6:
            if (isNaN(peso) == true) {
                alert("Lo siento, pero no ingresaste tu peso en la tierra. Vuelve a intentarlo!");
                }else{
                pesoFinal = peso*gUrano/gTierra;
                pesoFinal = parseFloat(pesoFinal).toFixed(2);
                alert("Tu peso en URANO es de: "+pesoFinal+"Kg.");
                }
                break;
        case 7:
            if (isNaN(peso) == true) {
                alert("Lo siento, pero no ingresaste tu peso en la tierra. Vuelve a intentarlo!");
                }else{
                pesoFinal = peso*gNeptuno/gTierra;
                pesoFinal = parseFloat(pesoFinal).toFixed(2);
                alert("Tu peso en NEPTUNO es: "+pesoFinal+"Kg.");
                }
                break;
        default:
            alert("Lo siento, pero la opción que elegiste no está en nuestro sistema solar");
            break;
    }
}