import { LitElement,css, html } from 'lit';
import '../src/e-contact.js';

export class ContactList extends LitElement {
  static styles = css`
  `;
  static get properties() {
    return {
      contactos: {type: Array}
    }
  }

  constructor() {
    super();
    this.contactos = [
      {
        nombre: 'Guillermo',
        correo: 'ejemplo@ejemplo.com'
      },
      {
        nombre: 'Jhon',
        correo: 'example@example.com'
      },
      {
        nombre: 'Pao',
        correo: 'example2@example2.com'
      },
    ]
  }


  toggle(e){
    e.preventDefault();
    this.verMas = !this.verMas;
  }

  render() {
    return html`
      <div>
        ${this.contactos.map(i=>
          html`
            <e-contact
              nombre="${i.nombre}"
              email="${i.correo}"></e-contact>
          `
        )}
      </div>
    `;
  }

}
customElements.define('contact-list', ContactList);
