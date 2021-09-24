//  texto en cadena con guiones
let cadTotal = "";
while (1){
    let cod = confirm("Indique una opción");
    if (cod == false){
        document.write("<br> La cadena total es:  " + cadTotal);
        break;
    }
    else{
        let cadena = prompt('Ingrese una cadena o palabra');
        if (cadTotal == ""){
            cadTotal += cadena;
        }
        else{
            cadTotal += ('-' + cadena);
        }
    }
}