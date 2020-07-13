//Variables - Vars
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const enviarEmail = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn')

//Eventos - Events
const eventListeners = () => {
    document.addEventListener('DOMContentLoaded', initApp);

    email.addEventListener('blur', validateFieldEmail);
    asunto.addEventListener('blur', validateFieldAsunto);
    mensaje.addEventListener('blur', validateFieldMensaje);

    enviarEmail.addEventListener('submit', enviarEmailFunction);
    resetBtn.addEventListener('click', resetFunction)
}

//Funciones - Functions
const initApp = () => {
    //Desabilitar envío
    btnEnviar.disabled = true;
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

const validateLength = (campo) => {
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('err');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('err');
    }
}

const allFieldsComplete = () => {
    let errores = document.querySelectorAll('.error');
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    }
}

const enviarEmailFunction = (e) => {
    //Spinner al presionar Enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif que envia el Email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //
    setTimeout(() => {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(() => {
           enviado.remove();
           enviarEmail.reset(); 
        }, 5000);
    }, 3000);

    e.preventDefault();
}

const resetFunction = (e) => {
    enviarEmail.reset();
    e.preventDefault();
}

eventListeners();