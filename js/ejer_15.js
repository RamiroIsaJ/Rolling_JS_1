// número de vocales

let texto = prompt('Ingrese una frase');
let vocales = 0;

for (let i=0; i<texto.length; i++){
    if (texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o'|| texto[i] == 'u'){
        vocales++;
    }
}

document.write(`El número de vocales en la frase es: ${vocales}`);