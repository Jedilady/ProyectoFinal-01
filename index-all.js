// 1 - Escribir una función que determine si un número es par o impar.

//funcion para dar una alerta de que lo introducido es erróneo
function parImparAlert() {

    const parImparInput = document.getElementById("parImparInput");
    const parImparAlert = document.getElementById("parImparAlert");
    const parImparBT = document.getElementById("parImparBT");

    //deshabilitamos el botón por default
    parImparBT.disabled = true;

    parImparInput.addEventListener('input', function() {

        // Limpiar mensajes anteriores
        //va dentro de la función para actualizarse con los cambios
        parImparAlert.innerHTML = "";

        //botón deshabilitado
        //aquí hacemos que escuche cada cambio
        parImparBT.disabled = true;

        //convertimos el string del input en número
        //debe colocarse aquí, dentro de la función, para que el value se actualice con cada cambio
        const parImparValue = parseInt(parImparInput.value);

        //escuchamos y removemos la clase "alert" del input
        parImparInput.classList.remove('alert')

        
        //vaciamos el mensaje de alerta cuando vaciamos el input
        //Se pone ANTES de la cadena IF ELSE porque se debe verificar si el campo está vacío ANTES de cualquier otra condición.
        //Si lo metemos en la cadena, se van a cumplir otras condicioenes antes de llegar hasta aquí
        if (parImparInput.value === "") {
            return; // Importante: recuerda detener la función si hay un error!
        }

        //revisamos las condiciones para que se muestre la alerta
        if (isNaN(parImparValue)) {
            parImparAlert.textContent = "No es un número";
            parImparInput.classList.add('alert');

        } else if ((parImparInput.value.includes('.') || parImparInput.value.includes(',')) ) {
            //esto no lo hacemos con /*parImparValue % 1 !== 0*/ porque nos interesa dar la alerta en cuanto el usuario ha ingresado el punto
            //esto no es válido /* includes('.' || ',') */ porque va a verificar el primer valor y ya
            parImparAlert.textContent = "No es un entero";
            parImparInput.classList.add('alert');
        } else {
            parImparBT.disabled = false;
        }
      });

}
//llamada a la función de alerta
parImparAlert();
//OJO
//Esta función también podrçia manejarse con un 
// document.addEventListener('DOMContentLoaded', function () {}
//y así no hay que "llamarla"
//no lo hice porque no estoy aún en este nivel, pero lo tomo en cuenta

//constante para el botón
const parImparBT = document.getElementById("parImparBT");

//función a ejecutar al hacer click
parImparBT.addEventListener('click', function() {
    const parImparInput = document.getElementById("parImparInput");
    const parImparValue = parseInt(parImparInput.value);
    const parImparText = document.getElementById("parImparText");

        if (parImparValue % 2 === 0) {
            parImparText.textContent = "Es par";
        } else {
            parImparText.textContent = "Es impar";
        }
    }
);

// 2 - Crear un algoritmo que invierta un string.
document.addEventListener('DOMContentLoaded', function () {
    const invertirStringInput = document.getElementById("invertirStringInput");
    const invertirStringText = document.getElementById("invertirStringText");

    //vaciamos el mensaje
    invertirStringText.textContent = "";

    invertirStringInput.addEventListener('input', function() {
        const inversed = this.value.split('').reverse().join('');
        invertirStringText.textContent = inversed;
    });

});

// 3 - Escribir una función que encuentre el número mayor en un array.
document.addEventListener('DOMContentLoaded', function () {
    const arrayRandomBT = document.getElementById("arrayRandomBT");
    const arrayRandomText = document.getElementById("arrayRandomText");
    const numeroMayorText = document.getElementById("numeroMayorText");

    arrayRandomBT.addEventListener('click', function() {

        //vaciamos nuestros elementos
        arrayRandomText.textContent = "";
        const arrayRandom = [];

        //obtenemos un número random, lo multiplicamos por 5 para poder obtener números del 0 al 5, suicientes para un buen array, pero no demasiados, y le sumamos 1 para no obtener 0
        let baseNumber = Math.floor((Math.random() * 3) + 1);
        const arrayLength = baseNumber * (baseNumber + 1);
        console.log(arrayLength);
        
        //usamos un for para la generación de números al azar del 1 al 1000001, y los metemos en el array
        /*for (let index = 0; index < arrayLength; index++) {
            arrayRandom.push(Math.floor(Math.random() * 1000000) + 1)
        }*/

       //usemos while para practicar
        while (arrayRandom.length < arrayLength) {
            let n = Math.ceil(Math.random() * 20000) - 10000;
            //multiplicando por 2000 y restando 1000 obtenemos números negativos
            arrayRandom.push(n++);
        }
        console.log(arrayRandom);
        
        arrayRandomText.textContent = arrayRandom; 

        numeroMayorText.textContent = `El numero mayor es: ${Math.max(...arrayRandom)}`;
    });

});

// 4 - Crear un algoritmo que devuelva el factorial de un número.
document.addEventListener('DOMContentLoaded', function () {
    const numFactorialRdmBT = document.getElementById("numFactorialRdmBT");
    const factorialText = document.getElementById("factorialText");

    numFactorialRdmBT.addEventListener('click', function() {

        //vaciamos nuestros elementos
        factorialText.textContent = "";

        //obtenemos un número random, lo multiplicamos por 20 como tope, + 1 para que nunca sea cero y lo almacenamos en una variable
        let baseNumber = Math.floor(Math.random() * 20);
        console.log(baseNumber);

        let factor = baseNumber;

        //controlamos manualmente que 0! = 1
        if (baseNumber == 0) {
            return factorialText.textContent = `El factor de : ${baseNumber} es ${1}`;
        }

        //creamos la variable que almacenará el resultado
        //const factorizado;
        
        //usamos un for para el cálculo, donde multiplicamos n * n-1 * n -2... etc
        for (let i = factor; i >= 1; i--) {
            factor = factor * i;
        }
        console.log(factor);

        factorialText.textContent = `El factor de : ${baseNumber} es ${factor}`;

        //Se puede hacer con while!
        /*
        function factorialize(baseNumber) {
            let factor = baseNumber;
            if (baseNumber === 0 || baseNumber === 1) 
                return 1; 
            while (baseNumber > 1) { 
                baseNumber--;
                result *= baseNumber;
            }
            return factor;
        }
        */
    });

});

// 5 - Determinar si una palabra es un palíndromo.
document.addEventListener('DOMContentLoaded', function () {
    const palindromoInput = document.getElementById("palindromoInput");
    const palindromoText = document.getElementById("palindromoText");
    const palindromoResult = document.getElementById("palindromoResult");

    //limpiamos nuestros contenidos
    palindromoText.textContent = "";
    palindromoResult.textContent = "";

    palindromoInput.addEventListener('input', function() {

        console.log(this.value, typeof this.value);
        
        
        
        //le hacemos trim al imput y lo llevamos a lowercase
        const invertir = this.value.trim().toLowerCase();
        //le hacemos reverse
        const reverse = invertir.split('').reverse().join('');

        palindromoText.textContent = reverse;

        //creamos las constantes "NoSpaces" para comparar sin tener en cuenta espacios, y que ejemplos como "dabale arroz a la zorra el abad" pasen por correctos
        //The Regex
        // \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).
        
        const invertirNoSpaces = invertir.replace(/\s+/g, '');
        const reverseNoSpaces = reverse.replace(/\s+/g, '');

        if (invertirNoSpaces === reverseNoSpaces) {
            palindromoResult.textContent = "Tenemos un palíndromo!"
        } else {
            palindromoResult.textContent = "No es palíndromo"
        }
        
        //resetear el mensaje a vacio cuando se borre el contenido del input
        if (this === "") {
            palindromoResult.textContent = ""
        }

        //ToDo
        //Si es número, hablar de capicúa y no de palíndromo
    });

    
});

// 6 - Crear un programa que calcule el número Fibonacci en la posición (n).
document.addEventListener("DOMContentLoaded", function () {
    const fibonacciInput = document.getElementById("fibonacciInput");
    const fibonacciAlert = document.getElementById("fibonacciAlert");
    const fibonacciResult = document.getElementById("fibonacciResult");
    const fibonacciBT = document.getElementById("fibonacciBT")

    fibonacciInput.addEventListener('input', function () {
        const data = parseInt(this.value);

        //reseteamos los valores
        fibonacciAlert.textContent = "";
        fibonacciBT.disabled = true;
        fibonacciResult.textContent = ""; 

        if (this.value === "") {
            //aquí NO usamos "data" porque luego de aplicar parseInt nos devuelve un NaN, no un vacío
            return; // Importante: recuerda detener la función si hay un error!
        }

        //al vaciar manualmente el imput, reseteamos todo
        if (this.value === "") { 
            fibonacciResult.textContent = ""; // Borra el resultado
            fibonacciBT.disabled = true;      // Desactiva el botón si está vacío
            return;
        }
        
        if (isNaN(data)) {
            fibonacciAlert.textContent = "No es un número"
        }else if (data < 0) {
            fibonacciAlert.textContent = "Es un número negativo"
        }else if ((this.value.includes('.') || this.value.includes(',')))
            // NO puedo usar la var DATA  porque data es un número (resultado de parseInt(this.value)), y .includes() solo funciona con strings o arrays.
            //y este modo me da problemas (data % 1 !== 0) 
            {
            fibonacciAlert.textContent = "No puedes ingresar decimales"
        }else {
            fibonacciBT.disabled = false;
        }
    })

    /*
    //Version mejorada de chatGPT
    fibonacciInput.addEventListener('input', function () {
    const value = this.value.trim(); // Elimina espacios en blanco
    const data = parseInt(value);

    // Reiniciar alertas y resultados
    fibonacciAlert.textContent = "";
    fibonacciResult.textContent = "";

    // Condiciones de entrada inválida
    const isEmpty = value === "";
    const isNotNumber = isNaN(data);
    const isNegative = data < 0;
    const hasDecimal = value.includes('.') || value.includes(',');

    if (isEmpty) {
        fibonacciBT.disabled = true; // Desactiva si está vacío
        return;
    }

    if (isNotNumber) {
        fibonacciAlert.textContent = "No es un número";
    } else if (isNegative) {
        fibonacciAlert.textContent = "Es un número negativo";
    } else if (hasDecimal) {
        fibonacciAlert.textContent = "No puedes ingresar decimales";
    }

    // Activar o desactivar el botón según haya errores
    fibonacciBT.disabled = isNotNumber || isNegative || hasDecimal;
});
    */

    //si se declaran las variables iniciales fuera, no se resetean al re-invocar la función
    /*
    let a = 0;
    let b = 1;
    let suma = 0;
    */

    function fibo(param){

        let a = 0;
        let b = 1;
        let suma;

        if (param === 0) return fibonacciResult.textContent = `${a}`;
        if (param === 1) return fibonacciResult.textContent = `${b}`;

        for(let i = 2; i <= param; i++) {
            suma = a + b;
            a = b;
            b = suma;
        }

        return fibonacciResult.textContent = `${b}`;
    };

    fibonacciBT.addEventListener('click', function () {
        fibo(fibonacciInput.value);
    })

    
})

// 7 - Ordenar un array de números en orden ascendente (sin usar sort).

//No lo entiendo, me faltan conocimientos y lógica, y demasiada práctica... lo dejo para luego, porque no lo veo

// 8 - Crear una función que cuente cuántas veces aparece un carácter en un string.
// 9 - Escribir un algoritmo que determine si un año es bisiesto.

//Cómo se calcula un bisiesto: 
// Es divisible por 4, pero NO por 100.
// Es divisible por 400.
// Si es múltiplo de 100 pero NO de 400, entonces NO es bisiesto.

function bisiesto(paramYear) {
    if ((paramYear % 4 === 0 && paramYear % 100 !== 0) || paramYear % 400 === 0) {
        console.log(`${paramYear} es bisiesto`);
    } else {
        console.log(`${paramYear} no es bisiesto`);
    }
}

bisiesto(2024);


// 10 - Crear un programa que convierta grados Celsius a Fahrenheit y viceversa.

//Qué tengo que hacer?
//Tengo que preguntarle al usuario los grados y cómo quiere hacer la conversión
// para cada tipo de conversión, creo una función con la fórmula
//entonces, tengo que crear un docu que escuche al usuario, un input para escuchar los grados, y un select para seleccionar el tipo de conversion, y un text para mostrar el resultado
//extra: confirmar que el usuario no está introduciendo texto ni decimales
document.addEventListener("DOMContentLoaded", function () {
    //llamamos las constantes que representan los elementos del documento
    const conversionCFInput = document.getElementById("conversionCFInput");
    const conversionCFSelect = document.getElementById("conversionCFSelect");
    const conversionCFBT = document.getElementById("conversionCFBT");
    const conversionCFAlert = document.getElementById("conversionCFAlert");
    const conversionCFResult = document.getElementById("conversionCFResult");

    // creamos las funciones de las fórmulas
    //Cel to Far
    const celToF = (grados) => {
        return (grados * 9 / 5) + 32;
    }
    //Far to Cel
    const farToCel = (grados) => {
        return (grados - 32) * 5 / 9;
    }
    
    //Establecemos la información que se obtendrá del usuario y cómo la mostraremos. A diferencia de antes, no usamos el input porque no nos interesa que se haga el cálculo mientras el usuario escribe, sino hasta que está listo. No hace falta tampoco deshabilitar el botón
    conversionCFBT.addEventListener('click', function () {

        //establecemos las constantes que traen los valores
        const grados = conversionCFInput.value;
        const tipoConversion = conversionCFSelect.value;

        if (grados !== "" && tipoConversion !== "") {
            conversionCFBT.disabled = false;
        }

        if (tipoConversion === "CeltoF") {
            let resultado = celToF(Number(grados));
            conversionCFResult.textContent(`${grados} C equivale a ${resultado} F`)
        } else if (tipoConversion === "FarToCel") {
            let resultado = farToCel(Number(grados));
            conversionCFResult.textContent(`${grados} F equivale a ${resultado} C`)
        } else if (grados === "") {
            conversionCFAlert.textContent("Introduce un número válido")
        }

    //Limpiamos y reseteamos

    })


})

function conversion(grados) {

}

// 11 - Encontrar el segundo número más grande en un array.
// 12 - Escribir una función que elimine los elementos duplicados de un array.
// 13 - Crear un algoritmo que sume todos los números de un array.
// 14 - Escribir un programa que verifique si dos strings son anagramas.
// 15 - Crear un programa que devuelva los números primos hasta el número (n).
// 16 - Escribir una función que convierta un número romano a número arábigo.
// 17 - Crear un algoritmo que valide si un string tiene paréntesis balanceados.
// 18 - Crear un programa que transforme una frase en "notación hacker" (leet speak).
// 19 - Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
// 20 - Un reloj muestra:
// -> la hora (0 <= h <= 23)
// -> los minutos (0 <= m <= 59)
// -> y los segundos (0 <= s <= 59).
// Escribe una funcion que calcule los millisegundos que han pasado desde media noche 00:00:00 hasta la hora actual teniendo en cuenta que:
// – Hay 1000 millisegundos en un segundo
// – Podemos obtener la hora, minutos y segundos con la función "getTime"
