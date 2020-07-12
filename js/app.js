//Variables - Vars
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

//Funciones - Functions
const inicioApp = () => {
    //Desabilitar envío
    btnEnviar.disabled = true;
}

const validarCampo = () => {
    
    validarLongitud(this);
    /* let errores = document.querySelectorAll('.error')
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    }
    if(this.type === 'email'){
        emailValidator()
    } */
}

const emailValidator = (campo) => {
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error')
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

const validarLongitud = (campo) => {
    console.log('1',campo)

    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

//Eventos - Events
const eventListeners = () => {
    document.addEventListener('DOMContentLoaded', inicioApp);

    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
}
eventListeners();