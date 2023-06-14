/* 2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, 
mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.
 */

import { pokemons } from "./pokemons.js";

const num = parseInt(prompt("Digite un numero"));

const mostrar = []


for (let i = 0; i < num; i++) {
    if(i%5 === 0){
        mostrar.push(pokemons[i])    
    }
    
}

console.log(mostrar);