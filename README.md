<H1>CHALLENGE AMIGO SECRETO</H1>

<h2>Proceso elaboración</h2>

1. Obtención de los elementos del DOM, como el botón de Agregar el valor del Input, anteriormente no conectaba y era porque cuando se usa el

```document.querySelector```

Para class se usa el ".", para el id se usa "#"

![image](https://github.com/user-attachments/assets/aa31f3fd-2369-4b28-8070-617b43a058bc)


2. Posterior agregamos el ```addEventListener``` para que cuando se haga click en el botón ejecute esa función agregar

3. Ahora que almacene los nombres en una lista, realizamos el siguiente código

function agregar() {

    var nombre = document.querySelector("#amigo").value;

    ```ListaNombres.push(nombre);```

    console.log(ListaNombres);

};

4. En este paso se valida la entrada para que no tenga valores vacios, primero se puso que cada letra del nombre sea un elemento de la lista, con el ```.split()```, de ahí había un problema sobre que se pudieran ingresar valores vacios, así que se usó el ```trim()``` para eliminarlos.

![image](https://github.com/user-attachments/assets/77b3c8d5-fa2b-4520-88ae-5c752d5e41ac)

5. Siguiente paso sería reestablecer el valor del input a "" para que se pueda ingresar el siguiente nombre sin problemas, eso lo realizamos nuevamente con el document.querySelector, ya que si usamos la variable nombre no funcionará pues esta es solo una copia, una variable que tiene el valor del input, pero si modificamos esa variable no afectará en nada al valor del input en sí mismo, por eso directamente obtener nuevamente el valor con document.querySelector.

![image](https://github.com/user-attachments/assets/46bf5247-f8e1-4e1d-a670-1f29a239ab99)

6. Dentro de la función Agregar, añadimos el for para que añada los nombres en las listas de html

![image](https://github.com/user-attachments/assets/9070ecc2-d687-41cc-bed1-e69c0b017f0f)

7. Borrar las listas con los nombres en el html con el dom, primero lo que se intentó realizar fue con un for poder eliminar cada valor de la lista, pero me di cuenta que no podia acceder a cada uno sin una clase o un identificador para ubicarloss.
   
![image](https://github.com/user-attachments/assets/eddcbe6f-0902-47fb-a798-9fa4a849ce35)

Algo así se planeaba realizar pero tenía que acceder a todos los valores de las listas, lo hubiera almacenado los nombres , pero eso no hubiera cambiado, tenía que volver a acceder a todos los elementos directamente

![image](https://github.com/user-attachments/assets/667779af-9f26-4e86-9ca1-68122d74e98b)

Así que primero se obtuvo todos los valores con la clase de nombreDeLista, en una lista, de ahí recorría cada valor y le ponía su contenido como ""

![image](https://github.com/user-attachments/assets/1c518c06-d2db-4489-8ef9-104f766c1ebc)

8. Finalmente sortear los nombres y mostrar solo 1, con el código math.random y math.floor para redondear, para así tener valores del 0 al número de elementos de la lista - 1, , luego el proceso se repite del punto 6 y 7

![image](https://github.com/user-attachments/assets/95417689-c63c-4556-87f6-52971eb16deb)





