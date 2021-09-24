// 3 nombres y edades. Presentar el mayor

let nombres = [];
let edades = [];

for (let i=1; i <= 3; i++){
    let nombre = prompt('Ingrese nombre');
    nombres.push(nombre);
    while (1){
        let edad = prompt('Ingrese edad');
        edad = parseInt(edad);
        if (!isNaN(edad)){
            edades.push(edad);
            break;
        }
    }
}
let edad_mayor = Math.max(edades);
document.write(`<br> La edad mayor ingresada es: ${edad_mayor}`)

let idx_mayor = edades.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
document.write(`<br> ${nombres[idx_mayor]} tiene mayor edad con ${edades[idx_mayor]} años.`);


