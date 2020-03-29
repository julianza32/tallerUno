function uno() {
    let i = 1;
    let notaParciales;
    let examenFinal, trabajoFinal, promedio, parciales, suma;
    suma = 0;

    do {
        notaParciales = parseFloat(prompt(`Ingre la nota del parcial ${i}`).replace(/,/, '.'));
        parseFloat(notaParciales);
        suma = suma + notaParciales;
        i++;
    } while (i <= 3)
    promedio = suma / 3;
    parciales = promedio * 0.55;
    examenFinal = parseFloat(prompt("Ingrese la nota del Examen final").replace(/,/, '.'));
    parseFloat(examenFinal);
    examenFinal = examenFinal * 0.30;
    trabajoFinal = parseFloat(prompt("Ingrese la nota del Examen final").replace(/,/, '.'));
    parseFloat(trabajoFinal);
    trabajoFinal = trabajoFinal * 0.15;
    NotaFinal = parciales + examenFinal + trabajoFinal;
    alert("La nota final de pepito es: " + NotaFinal.toFixed(2));
}
function dos() {
    let numeroAl = Math.round(Math.random() * 50);
    let numeroIng;
    alert("Bienvenido al juego de adivinalo");
    alert("Tienes 10 oportunidades para adivinar un número");
    alert("El mumero esta de un rango de 1 a 50");
    alert("Empecemos...");

    for (i = 0; i <= 10; i++) {
        do {
            numeroIng = Number(prompt(`Oportunidad ${i} de 10 \ningrese su número`));
            console.log(numeroIng);
        } while (isNaN(numeroIng) && numeroIng != "");
        if (numeroAl == numeroIng) {
            alert("Felicitaciones lo adivinaste!!");
            break;
        } else if (numeroIng > numeroAl) {
            alert('El número que estas buscando es menor');
        } else if (numeroIng < numeroAl) {
            alert('El número que estas buscando es mayor');
        }
    }

}
function tres() {
    let cantidadNumeros = Number(prompt("Ingrese la cantidad de números que quiera ingresar"));
    let arrayNumeros = [cantidadNumeros];
    let evaluador, perImp, perPar;
    let contadorPares = 0;
    let contadorImpares = 0;


    for (i = 0; i < cantidadNumeros; i++) {
        arrayNumeros[i] = Number(prompt(`Ingrese el numero ${i + 1} de ${cantidadNumeros}`));
        evaluador = arrayNumeros[i] % 2;
        if (evaluador == 0) {
            contadorPares++;
        } else {
            contadorImpares++;
        }

    }
    perPar = (contadorPares * 100) / cantidadNumeros;
    perImp = (contadorImpares * 100) / cantidadNumeros;
    alert(`La cantidad de números pares es: ${contadorPares}`);
    alert(`La cantidad de números impares es: ${contadorImpares}`);
    alert(`El % de números pares es: ${perPar.toFixed(2)}`);
    alert(`El % de números pares es: ${perImp.toFixed(2)}`);
}
function cuatro() {
    let opcion = Number(prompt("Ingrese 1) para imprimir números del 1 al 100\nIngrese 2) para imprimir números del 101 al 200"));

    switch (opcion) {
        case 1:
            for (let index = 1; index <= 100; index++) {
                document.write(`Número ${index} <br>`);
            }
            break;
        case 2: for (let index = 101; index <= 200; index++) {
            document.write(`Número ${index} <br>`);
        }
            break;
        default:
            alert("Ingrese una opción correcta");
            break;
    }

}
function cinco() {
    let cadena = prompt("Ingrese una palabra").replace(/ /g, "");
    cadena = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    cadena = cadena.toLowerCase();
    let longCadena = cadena.length;
    let cadenaInvert = "";

    while (longCadena >= 0) {
        cadenaInvert = cadenaInvert + cadena.charAt(longCadena);
        longCadena--;
    }

    if (cadena == cadenaInvert) {
        alert("Es una palabra o frase palindroma");
    } else {
        alert("No es una palabra o frase palindroma");
    }
}
function seis() {
    let arrayDeNombres = [];
    let nombre;
    let contador = 0;
    let aux = true;
    alert("Ingrese los datos a ordenar");
    alert("Y para terminar ingrese espacio en el cmpo de nombre");
    while (nombre != " ") {
        aux = true;
        nombre = prompt("Ingrese un nombre").toLowerCase();
        if (nombre == " ") {
            alert("Fin");
            break;
        }
        contador++
        for (j = 0; j < contador; j++) {
            if (nombre == arrayDeNombres[j]) {
                alert("No repita nombres");
                aux = false;
            }
        }
        if (aux == false) {
            contador--
        } else {
            arrayDeNombres[contador] = nombre;
            // document.write(`Nombre ${j} es: ${arrayDeNombres[contador]}<br>`);
        }
    }
    document.write("Los datos ordenados son: " + arrayDeNombres.sort());
}
function siete(){
    let palabra = prompt("Ingrese la palabra");
    let contadorLetras = palabra.length;
    let invertPalabra="";
    let palabraSinEs = palabra.replace(/ /g,"");
    let contadorSinEsp = palabraSinEs.length;
    let espacios = contadorLetras - contadorSinEsp; 
    while(contadorLetras>=0){
        invertPalabra=invertPalabra+palabra.charAt(contadorLetras);
        contadorLetras--;
    }
    document.write(`Tu palabra al revés es: ${invertPalabra}<br>`);
    document.write(`tu palabra tiene: ${contadorSinEsp} letras y ${espacios} espacio <br>`);
}