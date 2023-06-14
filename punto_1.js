/* 1. Crea un programa que imprima en consola los números impares del 1 al 50. */


const impares = []

for(let i = 0; i <= 50 ; i++) {

    if(i%2 != 0){
        impares.push(i)
    }

}

alert(impares)