const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

function validarNombre() {
    if (nombre.value.length >= 3) {
        nombre.className = "valid";
        errorNombre.textContent = "";
        return true;
    } else {
        nombre.className = "invalid";
        errorNombre.textContent = "Mínimo 3 caracteres";
        return false;
    }
}

function validarCorreo() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(correo.value)) {
        correo.className = "valid";
        errorCorreo.textContent = "";
        return true;
    } else {
        correo.className = "invalid";
        errorCorreo.textContent = "Correo inválido";
        return false;
    }
}

function validarPassword() {
    const regex = /^(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (regex.test(password.value)) {
        password.className = "valid";
        errorPassword.textContent = "";
        return true;
    } else {
        password.className = "invalid";
        errorPassword.textContent = "Mínimo 8 caracteres, número y símbolo";
        return false;
    }
}

function validarConfirmacion() {
    if (password.value === confirmPassword.value && confirmPassword.value !== "") {
        confirmPassword.className = "valid";
        errorConfirm.textContent = "";
        return true;
    } else {
        confirmPassword.className = "invalid";
        errorConfirm.textContent = "Las contraseñas no coinciden";
        return false;
    }
}

function validarEdad() {
    if (edad.value >= 18) {
        edad.className = "valid";
        errorEdad.textContent = "";
        return true;
    } else {
        edad.className = "invalid";
        errorEdad.textContent = "Debes ser mayor de 18";
        return false;
    }
}

function validarFormulario() {
    if (
        validarNombre() &&
        validarCorreo() &&
        validarPassword() &&
        validarConfirmacion() &&
        validarEdad()
    ) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

nombre.addEventListener("input", validarFormulario);
correo.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmPassword.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulario validado correctamente");
});
