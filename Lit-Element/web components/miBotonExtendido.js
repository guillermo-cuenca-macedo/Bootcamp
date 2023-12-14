class MiBotonExtendido extends HTMLButtonElement {
    constructor() {
        super();
        this.addEventListener('click', (e)=>{
            console.log('Evento click: ' + this.innerHTML);
            alert('Mi boton extendido');
        });
    }

    static get ceName() {
        return 'mi-boton-extendido';
    }

    get is(){
        return this.getAttribute('is');
    }

    set is(value){
        this.setAttribute('is', value || this.ceName)
    }
}

customElements.define('mi-boton-extendido', MiBotonExtendido, {extends: 'button'});

const miBotonExtendido2 = document.createElement('button', {is: MiBotonExtendido.ceName});

miBotonExtendido2.textContent = "Soy el segundo boton extendido";
document.body.appendChild(miBotonExtendido2);
const miBotonExtendido3 = document.createElement('button', {is:MiBotonExtendido.ceName});
miBotonExtendido3.textContent="Soy el boton extendido #3";
document.querySelector('#container').appendChild(miBotonExtendido2);
document.querySelector('#container').appendChild(miBotonExtendido3);
