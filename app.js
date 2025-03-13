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



    for (let contador = 0;contador < ListaNombres.length; contador++) {

        var ElementoLista = document.createElement("li");
        ElementoLista.innerHTML = ListaNombres[contador];

        //También se puede usar el textContent

        Lista.appendChild(ElementoLista);

    };

};

AgregarNombre.addEventListener("click", agregar);


function agregarNombre () {




};


