// pedir numeros y dar sumatoria total
let sumaT = 0;

while(1){
    let cod = confirm("Indique una opción");
    if (cod == false){
        document.write("<br> La sumatoria total es:  " + sumaT);
        break;
    }
    else{
        let valor = prompt('Ingrese un número');
        valor = parseInt(valor);
        if (isNaN(valor)){
            alert('Número no válido');
        }
        else{
            sumaT += valor;
        }
    }
}