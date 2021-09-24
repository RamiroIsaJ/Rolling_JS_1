// pirámide inversa con ingreso de usuario

let valor = prompt('Ingrese el valor de la base');
valor = parseInt(valor);

if (!isNaN(valor) && valor < 50){

    for (let i = valor; i > 0; i--){

        for (let j = 1; j <= i; j++){
            document.write(i);
        }
        document.write("<br>");
    }

}else{
    alert('Número no válido');
}