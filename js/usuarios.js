// Obtener usuarios de localStorage o crear array vacío
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Función para registrar usuario
function registrarUsuario(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const identificacion = document.getElementById("identificacion").value;
    const nacionalidad = document.getElementById("nacionalidad").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const password = document.getElementById("password").value;

    // Validar si el email ya existe
    if(usuarios.some(u => u.email === email)){
        alert("El usuario ya está registrado.");
        return;
    }

    const nuevoUsuario = { nombre, identificacion, nacionalidad, email, telefono, password };
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuario registrado con éxito!");
    window.location.href = "login.html";
}

// Función para login
function loginUsuario(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const usuario = usuarios.find(u => u.email === email && u.password === password);
    if(usuario){
        localStorage.setItem("usuarioActual", JSON.stringify(usuario));
        alert("Bienvenido " + usuario.nombre);
        window.location.href = "index.html"; // Redirige al inicio
    } else {
        alert("Usuario o contraseña incorrecta.");
    }
}


// Función para cerrar sesión
function logoutUsuario(){
    localStorage.removeItem("usuarioActual");
    alert("Sesión cerrada.");
    window.location.href = "index.html";
}
