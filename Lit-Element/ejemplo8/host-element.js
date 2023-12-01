import { LitElement, html, css } from 'lit';

class HostElement extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                background-color: azure;
            }

            :host([hiden]){
                display: none;
            }
            :host(.blue){
                background-color: aliceblue;
                color: blue;
            }
            p {
            font-family: fantasy
            }
        `;
    }

    render(){
        return html `
            <p>Este es un Párrafo de prueba</p>
        `;
    }
}

customElements.define('host-element', HostElement);
