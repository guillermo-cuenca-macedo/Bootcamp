import { LitElement, html } from 'lit';
import './list-element.js';

export class ColorList extends LitElement {
  static get properties() {
    return {
      colors: { type: Array },
    };
  }

  constructor() {
    super();
    this.colors = ['Turquesa', 'Esmeralda', 'Azul'];
  }

  render() {
    return html`
      <list-element .items="${this.colors}"></list-element>
    `;
  }
}

customElements.define('color-list', ColorList);
