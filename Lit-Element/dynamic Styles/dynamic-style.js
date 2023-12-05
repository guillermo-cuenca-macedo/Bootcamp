import { LitElement, html, css } from 'lit';

import {classMap} from 'lit-html/directives/class-map.js';
import {styleMap} from 'lit-html/directives/style-map.js';

export class DynamicStyle extends LitElement {

    static get styles(){
        return css`
            .mydiv {background-color: cornflowerblue;}
            .someclass {border: 5px solid black;}
        `;
    }

    static get properties() {
        return {
            classes: { type: Object},
            styles: { type: Object},
        };
    }

    constructor(){
        super();
        this.classes = { mydiv: true, someclass: true };
        this.styles = { color: 'red', fontFamily: 'Roboto', fontSize: '25px' };
    }

    render(){
        return html`
            <div class=${classMap(this.classes)} style=${styleMap(this.styles)}>
                Algun contenido de prueba
            </div>
        `;
    }
}

customElements.define('dynamic-style', DynamicStyle);
