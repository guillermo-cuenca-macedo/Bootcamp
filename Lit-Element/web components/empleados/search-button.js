import { LitElement, html, css } from 'lit-element';

export class SearchButton extends LitElement {
  static get styles() {
    return css`
      button {
        margin-left: 10px;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #87CEFA;
        color: black;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    `;
  }

  render() {
    return html`
      <button @click="${() => this.dispatchEvent(new CustomEvent('search'))}">Buscar</button>
    `;
  }
}

