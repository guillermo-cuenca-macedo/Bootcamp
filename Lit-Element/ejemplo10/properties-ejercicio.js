import { LitElement, html, css } from 'lit';

class PopertiesEjercicio extends LitElement {
    static styles = css`
        section {
            background-color: forestgreen
        }

        p {
            font-size: 20px;
        }
    `;
    
    static properties = {
      prop1: { type: String, reflect: true },
      prop2: { type: Number, reflect: true },
      prop3: { type: Boolean, reflect: true },
      prop4: { type: Array, reflect: true },
      prop5: { type: Object, reflect: true },
    }
  
    constructor() {
      super();
      this.prop1 = '';
      this.prop2 = 0;
      this.prop3 = false; 
      this.prop4 = [];
      this.prop5 = {};
    }
  
    render() {
      return html`
      <section>
        <h1>Ejemplo de atributos y propiedades</h1>
        <p>propiedad 1: ${this.prop1}</p>
        <p>propiedad 2: ${this.prop2}</p>
        <p>propiedad 3: ${this.prop3}</p>
        <p>propiedad 4: ${this.prop4.map((item, index) => html `<span>[${index}] : ${this.prop5[item]}</span>`)}</p>
        <button @click="${this.changeProperties}">change properties</button>
        <button @click="${this.changeAttributes}">change attributes</button>
      </section>
      `;
    }
  
    changeAttributes() {
      let randy = Math.floor(Math.random() * 10);
      let myBool = this.getAttribute('prop3');
  
      this.setAttribute('prop1', randy.toString());
      this.setAttribute('prop2', randy.toString());
      this.setAttribute('prop3', myBool ? '' : null);
      this.setAttribute('prop4', JSON.stringify([...this.prop4, randy]));
      this.setAttribute('prop5', JSON.stringify(Object.assign({}, this.prop5, { [randy]: randy })));
    }
  
    changeProperties() {
      let randy = Math.floor(Math.random() * 10);
      let myBool = this.prop3;
  
      this.prop1 = randy.toString();
      this.prop2 = randy;
      this.prop3 = !myBool;
      this.prop4 = [...this.prop4, randy];
      this.prop5 = Object.assign({}, this.prop5, { [randy]: randy });
    }
  }
  
  customElements.define('properties-ejercicio', PopertiesEjercicio);
  
