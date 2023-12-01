import { LitElement,css, html, render } from 'lit';
export class ThemeElement extends LitElement {

    static get styles() {
        return css`
            :host {
                display: block;
                color: var(--my-element-text-color, black);
                background: var(--my-element-background-color, white);
                font-family: var(--my-element-font-family, Roboto);
            }

            :host([hidden]) {
                display: none;
            }
        `;
    }

    render(){
        return html`
            <p><div>Lorem ipsum dolor sit, amet consectetur adipisicing</div></p>
        `;        
    }
}

customElements.define('theme-element',ThemeElement);
