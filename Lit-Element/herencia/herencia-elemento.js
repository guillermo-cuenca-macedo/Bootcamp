import { css } from 'lit';
import { SuperElemento } from './super-elemento';

export class HerenciaElemento extends SuperElemento {
    static get styles() {
        return [
            super.styles,
            css`button { 
                color: black;
                background-color: cornflowerblue;
                border: 2px solid red;
                padding: 10px;
                cursor: pointer;
            }`
        ];
    }
}
customElements.define('herencia-elemento', HerenciaElemento);
