import { LitElement, html, css } from 'lit-element';

export class SearchInput extends LitElement {
  static get styles() {
    return css`
      input {
        margin-right: 10px;
        padding: 10px;
        font-size: 16px;
      }
    `;
  }

  clearInput() {
    const inputElement = this.shadowRoot.querySelector('input');
    if (inputElement) {
      inputElement.value = '';
    }
  }

  getInputValue() {
    const inputElement = this.shadowRoot.querySelector('input');
    return inputElement ? inputElement.value : '';
  }

  render() {
    return html`
      <input type="text" id="search">
    `;
  }
}

