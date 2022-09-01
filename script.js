/*Debemos seleccionar todos los íconos, por lo cual debemos crear una una variable constante llamada icons*/
const icons = document.querySelectorAll('.section-1-icons i') /*Nombre de lo que queremos seleccionar.*/
/*Y para seleccionarlos debemos usar el método llamado querySelectorAll() especificando entre los paréntesis
el nombre de la sección*/ 
/*Vamos a hacer que los íconos se deslicen con intervalos. Para eso usaremos el método llamado interval, que nos
permite hacer correr la función una y otra vez con intervalos.
Este método lleva dos argumentos: el primero es una función callback que va a ser ejecutada una y otra vez.
Y el segundo argumento va a ser una cantidad de tiempo que va a ser expresada en milisegundos */

let i = 1  /*Para hacer crecer el valor de a uno debemos usar el operador incrementador que es expresado mediante
una i++ */
setInterval(() => {
    i++ /*Operador incrementador */

    const icon = document.querySelector('.section-1-icons .change') /*Como el primer ícono tiene la clase change, 
    debemos seleccionarlo para remover esa clase a ese ícono y  agregarle esa misma clase al siguiente ícono.
    Creamos una nueva variable llamada icon y usamos el método querySelector() para seleccionar el elemento 
    específico*/
    

    icon.classList.remove('change') /*Antes de remover la clase change, tenemos que acceder a la clase del ícono. Y para eso usaremos una de las
    propiedades llamadas classList que, nos da todas las clases que tiene.
    Necesitamos atar esta clase a la clase ícono.
    Luego debemos usar el método remove especificando la clase change. Por lo cual el ícono será escondido
    porque la clase change será removida.*/

    
    /*Para desempeñar y esconder los otros items o íconos, tenemos que acceder al siguiente ícono. Y para
    hacer eso vamos a usar la propiedad llamada nextElementSibiling atándolo al ícono, usar nuevamente la
    classList y agregarle la clase change. */
    /*Hasta acá los íconos se muentra una sola vez y desaparecen cuando termina la ronda. Esto sucede porque
    el último ícono no tiene ningún elementSibiling.*/
    

    if(i > icons.length) { /*Debemos crear una declaración con una condición para chequear si i es mayor que ícono */
        /*Si esa condición es cierta, quiere decir que el círculo o ronda de todos los íconos se completó, por 
        lo cual, debería volver a empezar y establecer el contador en 1. Para acceder nuevamente el primer ícono
        vamos a usar la notListIcon y especificar el número del primer ícono, el cual será 0.
        Usar la clase lista junto con el método agregar especificando el nombre de la clase change.  */
        icons[0].classList.add('change')
        /*Aparte de eso necesitamos establecer la variable i que vuelva a 1 */
        i = 1  /*Para solucionar ese problema debemos rastrear el ícono, para eso vamos a declarar una nueva variable.
        Esta variable va a ser un contador y lo vamos a establecer en 1 por defecto.
        Entonces, en cada ejecución, es decir, en cada cambio, este contador debe crecer de a uno. */
        /*si esta condición no es verdadera, necesitamos hacer correr la línea de código. Así que creamos una
        declaración que interfiera esa líne de código. */
    }else{
        icon.nextElementSibling.classList.add('change')
    }
}, 4000)

