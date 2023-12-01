import { LitElement,css, html } from 'lit';
export class SimpleComponent extends LitElement {
  static styles = css`
    h1,p, button {
      text-align: center;
    }
  `;
  static get properties() {
    return {
      nombre: {type: String},
      email: {type: String},
      verMas: {type: Boolean},
    }
  }

  constructor() {
    super();
    this.verMas = false;
  }


  toggle(e){
    e.preventDefault();
    this.verMas = !this.verMas;
  }

  render() {
    return html`
      <style>
        div {
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 10px;
          display: inline-block;
        }

        h1 {
          font-size: 1.2rem;
          font-weight: normal;
        }
      </style>
      <div>
        <h1>${this.nombre}</h1>
        <p><a href="#" @click="${this.toggle}">Ver más información</a></p>
        ${!this.verMas ?
          html`Email de ${this.nombre}: ${this.email}`:
          ''      
        }
      </div>
    `;
  }

}
customElements.define('simple-component', SimpleComponent);
