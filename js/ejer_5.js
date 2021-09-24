// calcular letra del DNI

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

while (1) {
    let cod = confirm("Indique una opción");
    if (cod == false) {
        break;
    }
    else {
        let numero = prompt('Ingrese un número entre 0 y 99999999');
        numero = parseInt(numero);
        if (isNaN(numero)) {
            alert('Número no válido');
        }
        else {
            let resto = numero % 23;
            console.log(resto)
            document.write("<br> La letra de su DNI es :  " + letras[resto]);
        }
    }
}
