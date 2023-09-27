/* Formulario */
const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const mail = document.getElementById("nombre");
const telefono = document.getElementById("nombre");
const tema = document.getElementById("nombre");
const descripcion = document.getElementById("nombre");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const tema = document.getElementById("tema").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();

    let resltNombre = validarNombre(nombre, "nombre", "avisoNombre");

    let resltMail = validarMAil(mail, "mail", "avisoMail");

    let resltTelefono = validarTelefono(telefono, "telefono", "avisoTelefono");

    let resltTema = validarTema(tema, "tema", "avisoTema");

    let resltDescripcion = validarDescripcion(descripcion, "descripcion", "avisoDescripcion");

    if(resltNombre && resltMail && resltTelefono && resltTema && resltDescripcion){
        return true
    }else{
        return false
    }
})

function validarNombre(nombre, esValido, esDisplay){
    if(nombre === ""){
        document.getElementById(esValido).classList.add("is-invalid");
        document.getElementsByClassName(esDisplay)[0].style.display = "block";
        return false;
    }else{
        document.getElementById(esValido).classList.remove("is-invalid");
        document.getElementById(esValido).classList.add("is-valid");
        document.getElementsByClassName(esDisplay)[0].style.display = "none";
        return true
    } 
}

function validarMAil(mail, esValido, esDisplay){
    const verMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (verMail.test(mail)) {
        document.getElementById(esValido).classList.remove("is-invalid");
        document.getElementById(esValido).classList.add("is-valid");
        document.getElementsByClassName(esDisplay)[0].style.display = "none";
        return true
    } else {
        document.getElementById(esValido).classList.add("is-invalid");
        document.getElementsByClassName(esDisplay)[0].style.display = "block";
        return false;
    }
}

function validarTelefono(telefono, esValido, esDisplay){
    if(telefono.length > 11 || telefono.length < 5 ){
        document.getElementById(esValido).classList.add("is-invalid");
        document.getElementsByClassName(esDisplay)[0].style.display = "block";
        return false;
    }else{
        document.getElementById(esValido).classList.remove("is-invalid");
        document.getElementById(esValido).classList.add("is-valid");
        document.getElementsByClassName(esDisplay)[0].style.display = "none";
        return true
    } 
}

function validarTema(tema, esValido, esDisplay){
    if(tema === ""){
        document.getElementById(esValido).classList.add("is-invalid");
        document.getElementsByClassName(esDisplay)[0].style.display = "block";
        return false;
    }else{
        document.getElementById(esValido).classList.remove("is-invalid");
        document.getElementById(esValido).classList.add("is-valid");
        document.getElementsByClassName(esDisplay)[0].style.display = "none";
        return true
    } 
}

function validarDescripcion(descripcion, esValido, esDisplay){
    if(descripcion === ""){
        document.getElementById(esValido).classList.add("is-invalid");
        document.getElementsByClassName(esDisplay)[0].style.display = "block";
        return false;
    }else{
        document.getElementById(esValido).classList.remove("is-invalid");
        document.getElementById(esValido).classList.add("is-valid");
        document.getElementsByClassName(esDisplay)[0].style.display = "none";
        return true
    } 
}

/* Fin formulario */