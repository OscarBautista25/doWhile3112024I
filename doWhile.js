var numero = 0;
var opcion;
var resultadofactorial=1;

do {
    opcion = parseInt(prompt("Elija una opción del menu: 1.Calcular Factorial 2. Determinar si es par 3.Terminar"))
    switch (opcion) {
        case 1:
            numero = parseInt(prompt("Ingrese el número al que le quiere calcular el factorial"))
            for (let i = 1; i <= numero; i++) {
               resultadofactorial=resultadofactorial*i;
                
            }
            alert(resultadofactorial + " es el factorial de " + numero)
            break;
        case 2:
            numero = parseInt(prompt("Ingrese el número que quiere saber si es par o impar"))
            if ((numero % 2)==0) {
                alert(numero + " es par")
            } else {
                alert(numero + " es impar")
            }
            break;
    
        
    }
    
} while (opcion!=3);

/*
i=0 ----rf=1
i=1-----rf=2
i=2 ----rf=4
i=3 ----rf=7
*/
/*
i=1-----rf=1
i=2 ----rf=2
i=3 ----rf=6
i=4-----rf=24
*/