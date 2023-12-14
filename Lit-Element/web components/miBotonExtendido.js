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
