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

