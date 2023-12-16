import { LitElement, html, css } from 'lit-element';

export class ClearSearchButton extends LitElement {
  static get styles() {
    return css`
      button {
        margin-left: 10px;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #d3d3d3;
        color: #333;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`
      <button @click="${this.handleClearSearch}">Limpiar Búsqueda</button>
    `;
  }

  handleClearSearch() {
    this.dispatchEvent(new CustomEvent('clear-search', { bubbles: true, composed: true }));
    this.dispatchEvent(new CustomEvent('clear-input', { bubbles: true, composed: true }));
  }
}

