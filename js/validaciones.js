// Campo vacio
function validaVacio(valor) {
    valor = valor.replace("&nbsp;", "");
    valor = valor == undefined ? "" : valor;
    if (!valor || 0 === valor.trim().length) {
        return true;
        }
    else {
        return false;
        }
    }

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("FrmIngresar").addEventListener('submit', validarFormulario);
});
function validarFormulario(evento) {
    evento.preventDefault();

    let validado = 0;
    let valueUsuario = document.getElementById('nombre').value;
    sessionStorage.setItem("usuarioSessionStore", valueUsuario);

// validacion campo vacio
    if(validaVacio($("#nombre").val()) || $("#nombre").val().length == 0) {
        alert(`Ingrese su nombre para poder iniciar`);
        window.location.href= "index.html";
    return;

    }else {
        validado++;
    }
// validacion 3 letras
    if($("#nombre").val().length <= 2 ){
        alert(`El nombre debe de tener mas de tres letras`);
        window.location.href= "index.html";
    return;

    }else{
        validado++;
    }

    if (validado == 2 ) {
        window.location.href= "Vista/categorias.html";
    }

}
