// EJERCICIO #1 

let num = 17;

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}

let resultado = parImpar(num);
console.log("Ejercicio #1 : El número "+num+" es "+resultado);


// EJERCICIO #2

function comparar(a,b) {
    if(a>b){
        console.log(" "+a+" es mayor que "+b)
    }
    if(a<b){
        console.log(" "+a+" es menor que "+b )
    }
    if(a===b)  {
        console.log("ambos valores son iguales")
    }
    return 
}
let comparado = (33, 56);

// EJERCICIO #3


function multiploCinco( resultado){
    if (numero % 5){
        console.log("No. "+numero+" no es multiplo de 5")
    }
    else {
        console.log("Si. "+numero+"  es multiplo de 5" )

    }
}
let numero = (45)
let multiplo = multiploCinco(numero);

// EJERCICIO #4

let i = 0;
let numE4 = (20)
function contador(resultado){
    while (i < numE4) {
     console.log(i++);
    
    }
}

let resultante = contador(i)
console.log(numE4) 

// EJERCICIO #5


function repetirPalabra(palabra, veces){
    for (let i = 0; i < veces; i++) {
        console.log(palabra);
    }
    
}

repetirPalabra("Ayuda",15);

// EJERCICIO #6

const a = ["Hola", "Adios", "Vida",2222]

function ejer6(array){
    for (let i = 0; i< a.length; i++){
        
            console.log(a[i])
    }
}
ejer6(a)


// EJERCICIO #7

const b = [10, 20,30, 40, 50, 60, 70, 80, 90, 100]

function ejer7(saltarN){
    for (let i = 0; i< b.length; i++){
        if(i !== 4){
            console.log(b[i])
        }
    }
}
ejer7(b)

// EJERCICIO #8

let n =(5) 
const numeros = [1, 5, 3, 7, 9, 3, 1, 5, 0]

function ejer8(n, numeros){
    for(let i = 0 ; i < numeros.length; i++){
        console.log(numeros[i]*n)
    }

}
ejer8(n, numeros);




