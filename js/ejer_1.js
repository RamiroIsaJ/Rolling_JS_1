// pedir edad y verificar si es > 18 o si no es numero

let edad = prompt('Ingrese su edad');
edad = parseInt(edad);
console.log(edad);

if (isNaN(edad)){
    alert('Número no VALIDO');
}else{
    if (edad >= 18 && edad < 100){
        document.write(`Ud tiene ${edad} años y es mayor de edad`);
    }else{
        document.write(`Ud tiene ${edad} años y es menor de edad`);
    }
}
