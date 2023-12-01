import { LitElement,css, html } from 'lit';

export class TemplateBind extends LitElement {
  static styles = css`
    * {
      padding:10px;
    }
  `;
  static get properties() {
    return {
      prop1: {type: String},
      prop2: {type: String},
      prop3: {type: Boolean},
      prop4: {type: String},

    }
  }

  constructor() {
    super();
    this.prop1 = 'texto enlazado';
    this.prop2 = 'mi Div';
    this.prop3 = true;
    this.prop4 = 'texto en input'
  }


  clickHandler(e){
    console.log(e.target);
  }

  render() {
    return html`
    <!-- Texto enlazado -->
    <div>${this.prop1}</div>

    <!-- Atributo enlazado -->
    <div id="${this.prop2}">Atributo enlazado</div>

    <!-- Atributo boleando enlazado -->
    <div>
      Atributo boleando enlazado
      <input type="text" .disabled="${this.prop3}"/>
    </div>

    <!-- Propiedad enlazada -->
    <div>
      Propiedad enlazada
      <input type="text" .value="${this.prop4}"/>
    </div>

    <!-- Controlador de eventos enlazada -->
    <div>
      Controlador de eventos enlazada
      <button @click = "${this.clickHandler}">Boton de eventos</button>
    </div>

    `;
  }

}
customElements.define('template-bind', TemplateBind);
