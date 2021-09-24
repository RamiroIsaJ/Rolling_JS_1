// tabla  número de filas y columnas
let filas = prompt('Ingrese número de filas');
filas = parseInt(filas);

let columnas = prompt('Ingrese número de columnas');
columnas = parseInt(columnas);

if (!isNaN(filas) && !isNaN(columnas)){
    let total = filas * columnas;
    for (let i=1; i<=filas; i++){
        for(let j=1; j<=columnas; j++){
            document.write(`${total}  `);
            total -= 1;
        }
        document.write(`<br> `);
    }

}else{
    alert('Números no válidos');
}