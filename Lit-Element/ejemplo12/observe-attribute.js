import { LitElement, html, css } from 'lit';

class ObserveAttribute extends LitElement {
  static properties = {
    myProp: { attribute: true },
    theProp: { attribute: false },
    otherProp: { attribute: 'other-prop' },
  };

  static styles = css`
    /* Agrega estilos si es necesario */
  `;

  constructor() {
    super();
    this.myProp = 'myProp';
    this.theProp = 'theProp';
    this.otherProp = 'otherProp';
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attribute change:', name, newVal);
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  render() {
    return html `
      <p>myProp ${this.myProp}</p>
      <p>theProp ${this.theProp}</p>
      <p>otherProp ${this.otherProp}</p>

      <button @click="${this.changeAttributes}">Change attributes</button>
    `;
  }

  changeAttributes() {
    let randomString = Math.floor(Math.random() * 100).toString();
    this.setAttribute('myprop', 'myprop' + randomString);
    this.setAttribute('theprop', 'theprop' + randomString);
    this.setAttribute('other-prop', 'other-prop' + randomString);
  }
}

customElements.define('observe-attribute', ObserveAttribute);
