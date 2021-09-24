// primera vocal

let texto = prompt('Ingrese una frase');
let posicion = 0;

for (let i=1; i<texto.length; i++){
    if (posicion == 0){
        if (texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o'|| texto[i] == 'u'){
            posicion = i;
        }
    }else{
        document.write(`La primera vocal está en la posición: ${posicion}`);
        break;
    }
}

