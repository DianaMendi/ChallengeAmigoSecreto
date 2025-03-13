// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var ListaNombres = [];

var AgregarNombre = document.querySelector(".button-add");

function agregar() {

    var nombre = document.querySelector("#amigo").value;

    nombre = nombre.trim();

    listaDigitos = nombre.split("");
    console.log(listaDigitos);


    if (listaDigitos.length != 0) {

        ListaNombres.push(nombre);

        console.log(ListaNombres);

    } else {

        alert("Falta ingresar Nombre");

    };

};

AgregarNombre.addEventListener("click", agregar);


function agregarNombre () {




};


