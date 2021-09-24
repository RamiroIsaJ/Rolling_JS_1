// número aletorio entre 1 y 99

let numero = (min, max) => {
    return  Math.round(min + Math.random() * (max - min));
}

let valor = numero(1, 99);
document.write(`El número aleatorio es:  ${valor}`);