/* 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número. */

const lista = [4,"dos",8,"tres",5,9,1,"cero"]



for (let i = 0; i < lista.length; i++) {
    
    if(typeof(lista[i]) === "number") {
        console.log(lista[i]);
    }    
}


/* lista.forEach(element => {
    if(typeof(element) === "number") {
        console.log(element);
    }    
}); */