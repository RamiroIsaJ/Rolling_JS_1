// texto separado con guiones

let texto = prompt('Ingrese una frase');
let nuevoTexto = ""

for(let i=0; i< texto.length; i++){
    if (i==0){
        nuevoTexto += texto[i];
    }else{
        nuevoTexto += '-' + texto[i];
    }
}

document.write(nuevoTexto);