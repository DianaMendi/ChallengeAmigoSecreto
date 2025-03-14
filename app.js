// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var ListaNombres = [];

var AgregarNombre = document.querySelector(".button-add");

var Lista = document.getElementById("listaAmigos");

function agregar() {

    var nombre = document.querySelector("#amigo").value;

    nombre = nombre.trim();

    listaDigitos = nombre.split("");
    console.log(listaDigitos);


    if (listaDigitos.length != 0) {

        ListaNombres.push(nombre);

        console.log(ListaNombres);

        document.querySelector("#amigo").value = "" ;

    } else {

        alert("Falta ingresar Nombre");

    };


    var listaNombresTotal = document.querySelectorAll(".nombreDeLista");


    listaNombresTotal.forEach(elemento => {
        elemento.textContent = '';
    });


    for (let contador = 0;contador < ListaNombres.length; contador++) {


        var ElementoLista = document.createElement("li");
        ElementoLista.className = "nombreDeLista";
        ElementoLista.innerHTML = ListaNombres[contador];

        //También se puede usar el textContent

        Lista.appendChild(ElementoLista);

    };

};

AgregarNombre.addEventListener("click", agregar);


function sortearAmigos(){

    if (ListaNombres == 0) {

        alert("No hay nombres para sortear");

    } else {

        var númeroAleatorio = Math.floor((Math.random()*ListaNombres.length));

        console.log(númeroAleatorio);

        console.log(ListaNombres[númeroAleatorio]);

        var listaNombresTotal = document.querySelectorAll(".nombreDeLista");


        listaNombresTotal.forEach(elemento => {
            elemento.textContent = '';
        });

        var ElementoLista = document.createElement("li");
        ElementoLista.className = "nombreDeLista";
        ElementoLista.innerHTML = ListaNombres[númeroAleatorio];

        //También se puede usar el textContent

        Lista.appendChild(ElementoLista);

    };


};


var SortearNombres= document.querySelector(".button-draw");

SortearNombres.addEventListener("click", sortearAmigos);

