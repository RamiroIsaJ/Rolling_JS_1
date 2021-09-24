// números del 1 al 500 y múltiplos de 4 y 9

for (let i=1; i <=500; i++){
    if (i%4 === 0){
        document.write(`<br> ${i} (Múltiplo de 4)`);
    }else if (i%9 === 0){
        document.write(`<br> ${i} (Múltiplo de 9)`);
    }else if (i%5 === 0){
        document.write(`<br> ${i} -`);
    }else{
        document.write(`<br> ${i}`);
    }
}