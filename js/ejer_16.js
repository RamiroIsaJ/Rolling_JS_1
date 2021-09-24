// frase al revés

let texto = prompt('Ingrese una frase');
let nuevoTexto = "";

for (let i=texto.length-1; i>=0; i--){
    nuevoTexto += texto[i];
}

document.write(`El nuevo texto es: ${nuevoTexto}`);