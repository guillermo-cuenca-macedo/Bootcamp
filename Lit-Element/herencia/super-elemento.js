import { LitElement, css, html } from 'lit';

export class SuperElemento extends LitElement {
    static get styles() {
        return css`
            button {
                width: 300px;
                font-style: italic;
            }
        `;
    }

    render(){
        return html`
            <button>Click</button>
        `;
    }

}

customElements.define('super-elemento', SuperElemento);
