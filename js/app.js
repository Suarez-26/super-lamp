// Archivo principal, actualmente vacío, se puede usar para funcionalidades generales
console.log("App Hotel iniciado");

// Verificar si hay usuario logueado
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

// Si no hay usuario, redirigir a login
if (!usuarioActual && window.location.pathname.indexOf("login.html") === -1 && window.location.pathname.indexOf("registro.html") === -1) {
    window.location.href = "login.html";
}

// Mostrar saludo con nombre en navbar
window.onload = function() {
    const divSaludo = document.getElementById("usuario-saludo");
    if(usuarioActual && divSaludo){
        divSaludo.textContent = `Hola, ${usuarioActual.nombre}`;
    }
};
