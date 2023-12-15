class MiSaludo extends HTMLElement {
    constructor(){
        const tpl = document.querySelector('template');
        const tplInst = tpl.content.cloneNode(true);
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(tplInst);
    }
}

customElements.define('mi-saludo', MiSaludo);
