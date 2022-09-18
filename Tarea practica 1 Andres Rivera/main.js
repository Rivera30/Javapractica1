/* Primero le vamos a solicitar al usuario un numero */
let opcion = prompt("Digite porfavor cual ejercicio quiere ejecutar 1 - 2 - 3 - 4 - 5 - 6");
/* Para no hacer tantos if y else, lo que vamos a utilizar es un switch para que haga una validacion de las opciones automaticamente */
switch (opcion)
{
/* vamos a ponerle a cada caso el numero corresponiente de acuerdo a lo que quiera pedir el usuario.
Caso 1 esta pidiendo la tercera parte de la edad de Elena */
  case "1":
    let edad = prompt("Escriba la edad de Elena");
/* Vamos hacer una divición entre la edad de Elena y divirlo entre 3 para así encontrar la edad de Lucia */
    if (f = edad / 3){
/* El toFixed no ayuda a deshacernos de los decimales */
        alert("La edad de Lucia es de " + f.toFixed(0) + " años");
    }
    break
/* Caso 2 esta pidiendo un programa que calcule la posible edad de una persona en un año específico */
  case "2": 
/* Este caso vamos a utlizar un window.onload = function() para hacer una funcion la cual por un medio de un for hara un ciclo 
para así poder ir sumando los años que van pasando y así hasta llegar al año solicitado y que nos de la edad del usuario en dicho año */
    window.onload = function(){
/* La variable nim es la variable que nos guardara el año actual */
        nim = prompt("Introduzca los dos ultimos dijitos de su año actual")
/* La variable sal es la variable que nos guardara el año quiere saber su edad el usuario */
        sal = prompt("Introduzca los dos ultimos dijitos del año que quiere saber su edad")
/* La variable suedad es la variable que nos guardara la edad actual del usuario */
        suedad = prompt("Introduce su edad");
            for(i=nim; i<=sal; i++){
/* Mientras que nim que es el año actual se va sumando hasta llegar al año solicitado es sal, suedad se va sumándose el mismo hasta que nim
llegue a sal */
                alert("Año actual 20" + nim + ", año introducido es 20" + sal + ", su edad seria "+ suedad++);
        }
/* Tenemos que hacer una alerta porque nos piden que el numero que introduzca el usuario sea menor que el año actual, entonces
para eso vamos hacer un if y esto hace que sal tenga que ser obligadamente mayor que nim, si no lo fuera le tira una alerta */
            if(nim >= sal){
                alert("Intruduce un año mayor o igual al año actual");
            }
      }
    break
/* Caso 3 esta pidiendo un programa que reciba como entrada el año de matrimonio del abuelo
de Alberto y que imprima la edad de la abuela de Alberto. */
  case "3":
/* Para este caso vamos a utilizar la misma logica del ejercicio 2, ya que vamos hacer una funcion y un for para poder
sumar los años de casados */
    window.onload = function(){
        añoM = prompt("Introduzca el año en el cual el abuelo de Alberto se caso")
        añoA = prompt("Introduzca el año actual")
/* Se nos dice que el abuelo de Alberto se caso cuando tenia 25 años y que la abuela tenia 7 años menor que el,
entonces lo que hacemos es hacer una variable donde guardaremos la edad de la abuela de Alberto cuando se caso con el 
abuelo de Alberto y haciendo una resta de 25 - 7 da igual a 18 años */
        abuelo = 18
            for(i=añoM; i<=añoA; i++){
/* Mientras que añoM que es el año cuando se casaron se va sumando hasta llegar al año actual el cual es la variable añoA, la variable abuelo se va sumándose el mismo hasta que añoM
llegue a añoA */
                alert("Año en el que se caso el abuelo de alberto " + añoM + ", año actual " + añoA + ", la edad de la abuela seria "+ abuelo++);
        }
      }
    break
/* Caso 4 esta pidiendo un programa que permita al usuario convertir grados Fahrenheit a
Celsius o viceversa */
  case "4":
/* Vamos a darle al usuario 2 opciones la primera para cambiar de grados fahrenheit a celsiu y la segunda para cambiar de celsiu a grados fahrenheit
y seran representados en 1 y 2  */
      let fandc = prompt ("Escriba 1 si quiere cambiar de grados fahrenheit a celsiu y 2 si quiere cambiar de celsiu a grados fahrenheit")
      if(fandc == 1){
        let f = prompt ("Escriba un numero")
/* Vamos hacer una function para convertir primero fahrenheit a celsius. Para eso vamos a utlizar la variable convertir
que dentro de ella vamos a ser la formula ((n°F - 32) × 5) / 9 */
        function convertir(fahrenheit){
          let convertir;
          convertir = ((fahrenheit - 32) * 5) / 9;
          return convertir;
        }
/* Ahora vamos a usar una alerta con la variable convertir y dentro de ella le pondremos el numero que el usuario ingreso. Esto
nos dara el numero ingresado convertido a Celsius*/
        alert(convertir(f));
      }else if(fandc == 2){
        let c = prompt ("Escriba un numero")
/* Ahora vamos hacer una function para convertir celsius a fahrenheit. Para eso vamos a utlizar la variable convertir
que dentro de ella vamos a ser la formula (n°C × 9/5) + 32 */
        function convertir2(celsiu){
          let convertir2;
          convertir2 = (celsiu * 9/5) + 32;
          return convertir2;
        }
/* Ahora vamos a usar una alerta con la variable convertir2 y dentro de ella le pondremos el numero que el usuario ingreso. Esto
nos dara el numero ingresado convertido a fahrenheit*/
        alert(convertir2(c));
      }
    break
/* Caso 5 esta pidiendo un programa que reciba el nombre de un producto, el precio de este y
cantidad a comprar, si la persona compra 3 se le aplicará un descuento de
10%, si lleva 5 o más un descuento de 20%. Debe imprimir una tabla con el
nombre del producto, cantidad, subtotal, descuento a aplicar y el precio final a
pagar. */
  case "5":
/* Para este caso se puede utlizar tambien un arreglo si gusta, pero en este caso para hacerlo simple utilice un prompt que le diera
al usuario las opciones con su monto y nombre*/
/* Utlice dos variables, una para que me guarde la opcion escogida por el usuario y otra para guardar la cantidad de producto que el
usuario pidio*/
    let producto = prompt("Escoja de los siguientes productos. 1 = reloj inteligente ₡110 mil colones, 2 = Telefono ₡499 mil colones, 3 = Audifonos ₡80 mil colones");
    let cantidad = prompt("Ahora digite la cantidad");
    if(producto == 1){
/* La variable reloj guardara el precio del producto escogido que en este caso fue el reloj inteligente */
      reloj = 110;
/* La variable f guardara la formula para saber el precio total del producto junto con la cantidad que pidio el usuario */
      f = cantidad * reloj;
/* El problema dice que el usuario si pide mas de 3 productos pero menos de 5 se le hace un descuento de 10%.
Para saber que descuento se le tiene que hacer vamos a utlizar un if */
      if(cantidad >= 3 && cantidad <= 4){
/* Ahora tenemos que hacer la formula para hacer el descuento entonces multiplicaremos el precio original por el descuento. Sería multiplicar F que es el precio total del producto junto con la cantidad solicitada
multiplicado por 10, que es el numero del descuento que vamos hacer y el resultado sera C. A continuación, dividiremos entre 100 = C/100. Por último, restaremos el precio original, que es F y el descuento,
que es P. F - P. Y eso nos daria el precio final del producto que es Y */
        c = f * 10;
        p = c / 100;
        y = f - p;
        alert("El producto seleccionado es Reloj inteligente, la cantidad es de " + cantidad + ", el subtotal es de " + f + ", el descuento es de 10% y el precio a pagar es de " + y);
      }
/* Ahora el problema dice que el usuario si pide mas de 5 productos se le hace un descuento de 20%.
Para saber que descuento se le tiene que hacer vamos a utlizar else if */
      else if(cantidad >= 5){
/* Ahora tenemos que hacer la formula para hacer el descuento entonces multiplicaremos el precio original por el descuento. Sería multiplicar F que es el precio total del producto junto con la cantidad solicitada
multiplicado por 20, que es el numero del descuento que vamos hacer y el resultado sera X. A continuación, dividiremos entre 100 = X/100. Por último, restaremos el precio original, que es F y el descuento,
que es Z. F - Z. Y eso nos daria el precio final del producto que es H */
        x = f * 20;
        z = x / 100;
        h = f - z;
        alert("El producto seleccionado es Reloj inteligente, la cantidad es de " + cantidad + ", el subtotal es de " + f + ", el descuento es de 20% y el precio a pagar es de " + h);
      }
/* Ahora el problema dice que el usuario si pide menos de 3 productos no se le hace un descuento.
Entonces vamos a utlizar else if, con una alerta que deje el precio original */
      else if(cantidad < 3){
        alert("El producto seleccionado es Reloj inteligente, la cantidad es de " + cantidad + ", el subtotal es de " + f + ", no posee descuento, el precio a pagar es de " + f);
      }
/* Y si el usuario no ingresa ningun numero solicitado entonces este else le tira una lerta */
      else {
        alert("No ingreso un numero, porfavor ingrese un numero de los solicitados")
    }
/* Esta logica se le aplicara a todos los demas productos, solo que las variables como F o Y seran cambiadas para no generar ningun problema
en el codigo */
    } 
    if(producto == 2){
      telefono = 499;
      o = cantidad * telefono;
      if(cantidad >= 3 && cantidad <= 4){
        q = o * 10;
        a = q / 100;
        l = o - a;
        alert("El producto seleccionado es Reloj inteligente, la cantidad es de " + cantidad + ", el subtotal es de " + o + ", el descuento es de 10% y el precio a pagar es de " + l);
      }else if(cantidad >= 5){
        g = o * 20;
        d = g / 100;
        r = o - d;
        alert("El producto seleccionado es Reloj inteligente, la cantidad es de " + cantidad + ", el subtotal es de " + o + ", el descuento es de 20% y el precio a pagar es de " + r);
      }else if(cantidad < 3){
        alert("El producto seleccionado es Reloj inteligente, la cantidad es de " + cantidad + ", el subtotal es de " + o + ", no posee descuento, el precio a pagar es de " + o);
      }else {
        alert("No ingreso un numero, porfavor ingrese un numero de los solicitados")
    }
    }
    if(producto == 3){
      audifonos = 80;
      w = cantidad * audifonos;
      if(cantidad >= 3 && cantidad <= 4){
        z = w * 10;
        b = z / 100;
        s = w - b;
        alert("El producto seleccionado es Reloj inteligente, la cantidad es de " + cantidad + ", el subtotal es de " + w + ", el descuento es de 10% y el precio a pagar es de " + s);
      }else if(cantidad >= 5){
        j = w * 20;
        k = j / 100;
        e = w - k;
        alert("El producto seleccionado es Reloj inteligente, la cantidad es de " + cantidad + ", el subtotal es de " + w + ", el descuento es de 20% y el precio a pagar es de " + e);
      }else if(cantidad < 3){
        alert("El producto seleccionado es Reloj inteligente, la cantidad es de " + cantidad + ", el subtotal es de " + w + ", no posee descuento, el precio a pagar es de " + w);
      }else {
        alert("No ingreso un numero, porfavor ingrese un numero de los solicitados")
    }
    }
    break
/* Caso 6 esta pidiendo un programa que reciba las notas de tres exámenes realizados por un
estudiante en un curso,Si el estudiante obtuvo menos de 70 y mayora 59 en el curso debe de ir
a ampliación. Si el estudiante obtuvo más de 70 en el curso, pero uno de los exámenes tuvo nota menor a 50 debe ir a
ampliación. Si el estudiante obtuvo nota menor a 60 reprueba el curso. */
  case "6":
    let resultado = prompt("Selecciones una de las siguientes opciones 1 = saber su promedio 2 = solo saber la suma de sus notas");
/* Vamos a solicitarle al usuario que digite las tres notas de sus examenes */
      let nota1 = prompt("Digite su primera nota");
/* Vamos a utilizar un parseInt para hacer que los numeros de las notas se vuelvan numericos y no se mantengan en el formato de letra */
      nota1 = parseInt(nota1)
      let nota2 = prompt("Digite su segunda nota");
      nota2 = parseInt(nota2)
      let nota3 = prompt("Digite su tercera nota");
      nota3 = parseInt(nota3)
/* Vamos a utilizar dos variables, N que nos guardara la formula para poder sacar el resultado y N4 que nos guardara el valor 3. En
este caso se puede utilizar solo una variable que es N, ya que N4 se puede validar sin ninguna variable */
      let n;
      let n4 = 3;
      if (resultado == "1") {
/* Ahora para sacar la nota final de los 3 examenes se tiene que primero sumar las tres notas y luego el resultado de la suma se divide en 3.
En este caso N sera donde guardaremos la suma de las 3 notas y N4 sera 3 para poder dividir N,
quedaria N/N4 y el resultado quedaria en la variable F */
          n = nota1 + nota2 + nota3;
          f = n / n4;
/* Para el resultado vamos a utilizar un toFixed para eliminar los decimales y que el resultado de F quede con solo con dos digitos  */
          alert("Su nota es: " + f.toFixed(0))
      } else if (resultado == "2") {
/* En las opciones del usuario esta la segunda opcion la cual es solo sumar sus notas, en este caso es un complemento que añadi
para poder darle una segunda opcion al usuario, puedes ignorarlo */
          n = nota1 + nota2 + nota3;
          alert("La suma de sus nota es: " + n)
      } else {
          alert("No ingreso un numero, porfavor ingrese un numero de los solicitados")
      }
/* Para  saber si tiene qe ir a ampliación vamos a ser comparaciones y a cada comparación le vamos hacer un if
para poder verificar que aplicaria a la nota final (si paso o tiene que ir a ampliación) y así darle la conclusión de su curso */
      if (f < 70 && f >= 59) {
          alert("Usted debe de ir a ampliación. Nota: " + f.toFixed(0))
      }
      if(f < 60){
        alert("Usted reprobo el curso")
      }
      if (f >= 65 && f <= 70) {
          alert("Usted paso raspando. Nota: " + f.toFixed(0))
      }
      if (f >= 70 && f <= 85) {
          alert("Usted paso, no esta mal. Nota: " + f.toFixed(0))
      }
      if (f >= 85 && f <= 99) {
          alert("Usted paso, muy bien. Nota: " + f.toFixed(0))
      }
      if (f >= 100) {
          alert("Usted paso, excelente. Nota: " + f.toFixed(0))
      }
      if(nota1 < 50){
        alert("Su primer examen es muy bajo. Usted debe de ir a ampliación")
      } 
      if(nota2 < 50){
        alert("Su segundo examen es muy bajo. Usted debe de ir a ampliación")
      }
      if(nota3 < 50){
        alert("Su tercer examen es muy bajo. Usted debe de ir a ampliación")
      }
      break   
/* Por ultimo utilizaremos un default, ya que si el usuario llegara a ingresar un numero mayor a los solicitados, le imprimira una
alerta sobre que no ingreso los numeros solicitados y tendra que volver a digitar un numero valido */
  default:
    if(opcion > 6)
    alert("No ingreso un numero, porfavor ingrese un numero de los solicitados");
  }

/* Andres Rivera */
