import { html, css, LitElement } from 'lit';

export class WishlistComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
    }

    .marco {
      border: 3px solid black;
      padding: 15px 15px;
      background-color: cornflowerblue;
    }

    .checkList {
      margin-right: 5px;
    }

    form input {
      display: block;
      width: 100%;
      padding: 8px;
      margin: 20px 0 20px 0;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    input[type="checkbox"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 15px;
      height: 15px;
      border: 2px solid #000;
      border-radius: 5px;
      background-color: #f0f0f0;
      cursor: pointer;
    }

    input[type="checkbox"]:checked {
      background-color: green;
    }

    fieldset {
      border: solid black;
    }

    li {
      list-style-type: none;
      margin-bottom: 15px;
    }

    button {
      margin: 10px 10px;
      padding: 8px 16px;
      font-size: 16px;
      background-color: lightgreen;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      color: black;
    }

    label {
      font-size : 25px;
    }

    .cambio-color {
      transition: background-color 0.5s;
    }

    .verde {
      background-color: green;
    }

    .amarillo {
      background-color: yellow;
    }

    .rojo {
      background-color: red;
    }

    .tachado {
      text-decoration: line-through;
    }

    @media screen and (min-width: 768px) {
      .marco {
        max-width: 1000px;
        margin: auto;
      }
    }
  `;

  static properties = {
    lista: { type: Array },
    inputValue: { type: String },
    header: { type: String },
  };

  constructor() {
    super();
    this.inputValue = '';
    this.lista = [];
    this.header = 'Mi lista de actividades';
  }

  addToList(event) {
    event.preventDefault();
    if (this.inputValue && this.inputValue.trim() !== "") {
      const nuevoElemento = {
        texto: this.inputValue.trim(),
        completada: false,
        segundosRegistro: 0,
        tiempoInicio: Date.now()
      };

      this.lista = [...this.lista, nuevoElemento];
      this.inputValue = "";
      this.iniciarCambioColores(nuevoElemento);
    }
    console.log("Lista actual:", this.lista);
  }

  iniciarCambioColores(actividad) {
    setInterval(() => {
      this.actualizarColorActividad(actividad);
    }, 5000);
  }

  actualizarColorActividad(actividad) {
    const segundosTranscurridos = this.obtenerSegundosTranscurridos(actividad);
    if (segundosTranscurridos < 20) {
      actividad.color = 'verde';
    } else if (segundosTranscurridos < 25) {
      actividad.color = 'amarillo';
    } else {
      actividad.color = 'rojo';
    }
    this.requestUpdate();
  }

  obtenerSegundosTranscurridos(actividad) {
    const segundosTranscurridos = Math.floor((Date.now() - actividad.tiempoInicio) / 1000);
    return segundosTranscurridos;
  }

  checkboxChange(index) {
    const actividad = this.lista[index];
    actividad.completada = !actividad.completada;

    if (actividad.completada) {
      actividad.segundosRegistro += this.obtenerSegundosTranscurridos(actividad);
      console.log(`Actividad ${index + 1}: ${actividad.texto} marcada como completada. Segundos registrados por tarea: ${actividad.segundosRegistro}`);
    }

  }

  markDone() {
    this.lista = this.lista.filter((actividad) => !actividad.completada);
    console.log("Actividades archivadas. Lista actual:", this.lista);
  }

  render() {
    return html`
      <div class="marco">
        <form>
          <fieldset>
            <legend>${this.header}</legend>
            <input type="text" .value="${this.inputValue}" 
                   @input="${(e) => this.inputValue = e.target.value}"
                   placeholder="Agregue actividad">
            <button @click="${this.addToList}">Agregar a la lista</button>
          </fieldset>
        </form>
        <div>
          <h3>Lista de actividades diarias</h3>
          <ul>
            ${this.lista.map((actividad, index) => html`
              <li>
                <input type="checkbox" class="checkList" id="check-${index}" 
                       @change="${() => this.checkboxChange(index)}" 
                       .checked="${actividad.completada}">
                <label class=${`cambio-color ${actividad.color} ${actividad.completada ? 'tachado' : ''}`} 
                       for="check-${index}">${actividad.texto}</label>
              </li>`)}
          </ul>

          <button @click="${this.markDone}">Archivar actividades terminadas</button>
        </div>
      </div>
    `;
  }
}

