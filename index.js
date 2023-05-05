const { default: Swal } = require("sweetalert2");

function encriptar() { // Obtener el texto que el usuario desea encriptar
    let texto = document.getElementById("texto").value; // Aquí quiero obtener no el texto como tal sino el valor del texto, con ".value"; aquí "let" te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando, a diferencia de la palabra clave "var" la cual define una variable global o local en una función sin importar el ámbito del bloque."
    let tituloMensaje = document.getElementById("titulo-mensaje"); 
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto // Creo variable "textoCifrado = texto" que es lo que quiero, cifrar el texto, y en el "texto" voy a empezar a reemplazar las letras
        .replace(/e/gi, "enter")  // Método en js que me permite, mediante expresiones regulares(/e/gi(globalmente),/i/gi,/a/gi, etc.), obtener una letra y reemplazarla; de manera global yo quiero las "e" y que me las reemplace por la palabra "enter"
        .replace(/i/gi, "imes") // También quiero, de manera global, que me reemplace las "i" por la palabra "imes"
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if  (texto.length != 0) {// Si el usuario a escrito algo, es decir, si lo que el usuario a escrito es correcto(a escrito una letra o algo), entonces:
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg"; // Mientras la ruta(src) sea la que se describe aquí
    } else { // De lo contrario:
        muñeco.src = "./img/muñeco.png"; // Muñeco va a ser igual a otra imagen
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje"); 
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if  (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.jpg";
    } else {
        muñeco.src = "./img/muñeco.png"; // Muñeco va a ser igual a otra imagen
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}


