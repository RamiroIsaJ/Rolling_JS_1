// nota entre 0 y 10

let nota = prompt('Ingrese su nota');
nota = parseInt(nota);

if (isNaN(nota)){
    alert('Nota no VALIDA');
}else{
    if (nota >= 0 && nota <=2){
        alert('Su nota es MUY DEFICIENTE');
    }else if (nota >=3 && nota <= 4){
        alert('Su nota es INSUFICIENTE');
    }else if (nota >=5 && nota <= 6){
        alert('Su nota es SUFICIENTE');
    }else if (nota === 7){
        alert('Su nota es BIEN');
    }else if (nota >=8 && nota <= 9){
        alert('Su nota es NOTABLE');
    }else if (nota === 10){
        alert('Su nota es SOBRESALIENTE');
    }else{
        alert('Nota no está en el rango');
    }
}