import { LitElement,css, html } from 'lit';
export class SimpleComponent extends LitElement {
  static styles = css`
    h1,p, button {
      text-align: center;
    }
  `;
  static get properties() {
    return {
      title: {type: String},
      counter: {type: Number},
      myString: {type: String},
      myArray: {type: Array},
      myBoolean: {type: Boolean}
    }
  }

  constructor() {
    super();
    this.title = 'Ejemplo #1 Template';
    this.counter = 48;
    this.myString = 'Template de Guillermo';
    this.myArray = ['Argentina','Australia','Alemania'];
    this.myBoolean = true;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <button @click=${this.__increment}>Incrementar </button>
      <span>${this.counter}</span>
      <hr>
      <h1>Map en arreglos y condicionales</h1>
      <h2>Paíser por visitar</h2>
      <ul>
        ${this.myArray.map(i => html`<li>${i}</li>`)}
      </ul>
      ${this.myBoolean?
           html`<p>Renderiza algo si el Boolean es true</p>`:
           html`<p>Renderiza cualquier otra cosa si no es true</p>`
        }
    `;
  }
}
customElements.define('simple-component', SimpleComponent);
