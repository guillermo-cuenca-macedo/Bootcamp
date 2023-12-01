import { LitElement, html, css } from 'lit';
import './text-input.js'

export class InputSample extends LitElement {
    static get styles() {
        return css`
        :host {
            display: block;
            padding: 25px;
            color: var(--input-sample-text-color, #000);
        }
        span {
            color: red;
            font-size: 25px;
        }
        `
    }

    static get properties() {
        return {
            miDato: {type: String}
        }
    }

    constructor() {
        super();
        this.miDato = 'Valor de inicio';
    }

    render() {
        return html `
            <h1>Elemento principal</h1>
            <my-text-input
                value="${this.miDato}"
                @change="${this.inputCambiado}">
            </my-text-input>

            <p>El dato que se escribio es: <span>${this.miDato}</span></p>
            <button @click="${this.resetTexto}">Borrar el texto</button>
        `;
    }

    inputCambiado(e) {
        this.miDato = e.detail;
    }

    resetTexto() {
        this.miDato = '';
    }
}

customElements.define('input-sample', InputSample);

