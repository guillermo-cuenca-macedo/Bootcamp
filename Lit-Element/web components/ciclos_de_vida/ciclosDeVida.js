class MiMensaje extends HTMLElement {
    constructor(){
        super();
        this.addEventListener('click', function(e){
            alert('Click en mensaje');
        });
        console.log('Constructor: Cuando el elemento es creado');
    }

    static get observedAttributes(){
        return ['msj', 'casi-visible'];
    }

    get msj(){
        return this.getAttribute('msj');
    }

    set msj(val){
        this.setAttribute('msj', val);
    }

    get casiVisible(){
        return this.hasAttribute('casi-visible');
    }

    set casiVisible(val){
        if(val){
            this.setAttribute('casi-visible', '');
        }
        else {
            this.removeAttribute('casi-visible');
        }
    }

    connectedCallback() {
        console.log('connectedCallback: cuando el elemento es insertado en el documento');
    }

    disconnectedCallback() {
        alert('disconnected Callback: cuando elemento es eliminado del documento')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('attributeChangedCallback: cuando cambia un atributo');
        if(name === 'msj'){
            this.pintarMensaje(newValue);
        }

        if(name === 'casi-visible'){
            this.setCasiVisible();
        }
    }

    pintarMensaje(msj){
        this.innerHTML = msj;
    }

    setCasiVisible(){
        if(this.casiVisible){
            this.style.opacity = 0.1;
        } else {
            this.style.opacity = 1;
        }
    }
}

customElements.define('mi-mensaje', MiMensaje);
let miMensaje = document.createElement('mi-mensaje');
miMensaje.msj = 'un nuevo mensaje desde creacion';
document.body.appendChild(miMensaje);

let tercerMensaje = new MiMensaje();
tercerMensaje.msj = 'Este es el tercer mensaje';
document.body.appendChild(tercerMensaje);
