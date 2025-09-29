//1. Escribe un comentario en una linea
// Este es un comentario en una línea

//2. Escribe un comentario en varias lineas
/*
 Este es un comentario
 en varias líneas
*/

//3. Declara variables con valores asociados a todos los tipos de datos y imprimelos en la consola
let numero = 10;
let texto = "Hola";
let booleano = true;
let indefinido = undefined;
let nulo = null;
let simbolo = Symbol("simbolo");
let objeto = { nombre: "Juan", edad: 25 };
let arreglo = [1, 2, 3];

console.log("Variables: ", numero, texto, booleano, indefinido, nulo, simbolo, objeto, arreglo);

//4.Modifica los valores de las variables por otros valores y vuelve a imprimirlos en la consola.
numero = 20;
texto = "Mundo";
booleano = false;
objeto = { nombre: "Ana", edad: 30 };
arreglo = [4, 5, 6];

console.log("Variables modificadas: ",numero, texto, booleano, objeto, arreglo);

//5. Declara constantes con valores asociados a todos los tipos de datos y imprimelos en la consola.
const cNumero = 5;
const cTexto = "Constante";
const cBooleano = true;
const cIndefinido = undefined;
const cNulo = null;
const cSimbolo = Symbol("constante");
const cObjeto = { color: "azul" };
const cArreglo = [7, 8, 9];

console.log("Constantes: ", cNumero, cTexto, cBooleano, cIndefinido, cNulo, cSimbolo, cObjeto, cArreglo);

//6. Crea una variable para cada operador aritmetico y muestra su resultado en la consola.
let suma = 5 + 3;
let resta = 10 - 2;
let multiplicacion = 4 * 2;
let division = 20 / 5;
let modulo = 7 % 2;

console.log("Aritmética: ",suma, resta, multiplicacion, division, modulo);

//7. Crea una variable para cada operador de asignacion y muestra su resultado en la consola.
let a = 5;
a += 2;
let b = 10;
b -= 3;
let c = 4;
c *= 2;
let d = 8;
d /= 2;

console.log("Asignación: ", a, b, c, d);

//8. Crea una variable para cada operador de comparacion y muestra su resultado en la consola.
let igual = 5 == "5";
let estrictamenteIgual = 5 === "5";
let mayor = 10 > 5;
let menor = 3 < 8;

console.log("Comparación: ",igual, estrictamenteIgual, mayor, menor);

//9. Crea una variable pcon un operador lógico y muestra su resultado en la consola.(AND y OR)
let and = true && false;
let or = true || false;

console.log("Lógicos: ",and, or);

//10. Crea una variable con un operador ternario y muestra su resultado en la consola.
let edad = 18;
let acceso = edad >= 18 ? "Permitido" : "Denegado";

console.log("Ternario: ", acceso);

//11. Concatena dos cadenas de texto y muestra el resultado en la consola.
let saludo = "Hola";
let nombre = "Mundo";
let mensaje = saludo + " " + nombre;

console.log("Concatenación: ", mensaje);

//12. Transforma una cadena de texto en mayúsculas y muestra el resultado en la consola.
let textoMayusculas = "texto en mayusculas".toUpperCase();
console.log("Mayúsculas: ", textoMayusculas);

//13. Muestra la longitud de una cadena de texto en la consola.
let longitud = "Texto largo".length;
console.log("Longitud: ", longitud);

//14. Remplaza un el espacio de una cadena por un guión y muestra el resultado en la consola.
let frase = "Hola mundo bonito".replace(/ /g, "-");
console.log("Reemplazo: ", frase);

//15. Comprueba si un String contiene una palabra en concreto y muestra el resultado en la consola.
let contiene = "Esto es una prueba".includes("prueba");
console.log("Contiene palabra: ", contiene);

//17. Investiga algun metodo mas utilizado con String y muestra el resultado en la consola.
let textoRecortado = "Hola mundo".slice(0, 4);
console.log("Texto recortado: ", textoRecortado);

//18. Imprime tu nombre si una varibale tiene su valor
let miNombre = "Monica";
if (miNombre) {
    console.log("Mi nombre es: ", miNombre);
}

//19. Imprime acceso permitido si un variable nombre y su contraseña son correctos
let usuario = "admin";
let contraseña = "1234";
if (usuario === "admin" && contraseña === "1234") {
    console.log("Acceso permitido");
}

//20. Imprime en que estacion del año estamos a partir de una variable que indique el mes
let mes = "Septiembre";
if (["Marzo", "Abril", "Mayo"].includes(mes)) {
    console.log("Primavera");
} else if (["Junio", "Julio", "Agosto"].includes(mes)) {
    console.log("Verano");
} else if (["Septiembre", "Octubre", "Noviembre"].includes(mes)) {
    console.log("Otoño");
} else {
    console.log("Invierno");
}

//21. Usa switch rehaciendo el ejercicio 20
switch (mes) {
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Primavera");
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Verano");
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Otoño");
        break;
    default:
        console.log("Invierno");
}

//22. Crea un listado que almacene cinco elementos.
let lista = ["uno", "dos", "tres", "cuatro", "cinco"];
console.log("Lista: ", lista);

//23. A ese listado incluye uno al principio y uno al final.
lista.unshift("cero");
lista.push("seis");
console.log("Lista actualizada: ", lista);

//24. Elimina el último elemento del listado.
lista.pop();
console.log("Lista sin último: ", lista);

//24. Crea un Set que guarde cinco elementos.
let conjunto = new Set(["a", "b", "c", "d", "e"]);
console.log("Set: ", conjunto);

//26.Crea un mapa que como clave tenga un numero y como valor el mes.
let mapa = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"]
]);
console.log("Mapa: ");
mapa.forEach((valor, clave) => console.log(`${clave}: ${valor}`));

//27. Crea un bucle que imprima numero del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//28. Crea un bucle que cuente las vocales de una cadena de texto
let cadena = "Hola mundo";
let contadorVocales = 0;
for (let letra of cadena.toLowerCase()) {
    if ("aeiou".includes(letra)) contadorVocales++;
}
console.log("Vocales: ", contadorVocales);

//29. Usa un bucle para invertir una cadena de texto
let original = "Hola";
let invertida = "";
for (let i = original.length - 1; i >= 0; i--) {
    invertida += original[i];
}
console.log("Invertida: ", invertida);

//30. Crea un funcion que reciba dos numeros y los sume
function sumar(x, y) {
    return x + y;
}
console.log("Suma función: ", sumar(3, 4));

//31. Crea una funcion que reciba un Array de Strings y devuelve un nuevo array solo con las letras mayusculas del Array original
function filtrarMayusculas(arr) {
    return arr.filter(letra => letra === letra.toUpperCase());
}
console.log("Mayúsculas:", filtrarMayusculas(["A", "b", "C", "d"]));

//32. Crea una funcion que reciba un String y devuelva la candena al reves
function invertirTexto(str) {
    return str.split("").reverse().join("");
}
console.log("Invertido:", invertirTexto("Hola mundo"));