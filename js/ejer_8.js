// pirámide contínua entre 1 y 50
let total = prompt('Ingrese un número entre 1 y 50');
total = parseInt(total);

if (!isNaN(total) && total >= 1 && total <= 50){

    for (let i = 1; i <= total; i++){

        for (let j = 1; j <= i; j++){
            document.write(j);
        }
        document.write("<br>");
    
    }
}
else{
    alert("Número no válido")
}
