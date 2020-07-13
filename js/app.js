//Variables - Vars
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const enviarEmail = document.getElementById('enviar-email');

//Funciones - Functions
const initApp = () => {
    //Desabilitar envío
    btnEnviar.disabled = true;
}

const validateLength = (campo) => {
    console.log('1',campo.value)
    console.log('2',campo.value.length)

    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('err');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('err');
    }
}

const emailValidator = (campo) => {
    
}

const validateFieldEmail = () => {
    validateLength(this.email);
    //Validar que tiene formato email
    const campo = this.email;
    if(campo.value.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('err')
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('err');
    }
    allFieldsComplete();
}

const validateFieldAsunto = () => {
    validateLength(this.asunto);
    allFieldsComplete();
}

const validateFieldMensaje = () => {
    validateLength(this.mensaje);
    allFieldsComplete();
}

const allFieldsComplete = () => {
    let errores = document.querySelectorAll('.error');
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    }
}

//Eventos - Events
const eventListeners = () => {
    document.addEventListener('DOMContentLoaded', initApp);

    email.addEventListener('blur', validateFieldEmail);
    asunto.addEventListener('blur', validateFieldAsunto);
    mensaje.addEventListener('blur', validateFieldMensaje);
}
eventListeners();