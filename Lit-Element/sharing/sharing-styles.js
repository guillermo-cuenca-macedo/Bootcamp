import { LitElement, html, css } from 'lit';
import { buttonStyles } from './module-styles';

export class SharingStyles extends LitElement {
    static styles = [
        buttonStyles,
        css`
            :host {
                display: block;
                border: 1px solid black;
            }
        `
    ];

    render() {
        return html`
        <button class="green-button">click (botón activo)</button>
        <button class="green-button" disabled>click (botón inactivo)</button>
        `;
    }
}
customElements.define('sharing-styles', SharingStyles);
