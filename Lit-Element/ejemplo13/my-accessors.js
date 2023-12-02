import { LitElement, html, css } from 'lit';

class MyAccessors extends LitElement {

    static styles = css`
        p {
            color:red
        }
    `;

    static properties = {
        prop: {type: Number}
    }

    set prop(val) {
        let oldVal = this._prop;
        this._prop = Math.floor(val);
        this.requestUpdate();
    }

    get prop() {return this._prop}

    constructor() {
        super();
        this._prop = 1.5;
    }

    render(){
        return html`
            <p>Propiedad: ${this._prop}</p>
            <button @click="${()=> {this.prop = Math.random()*10;}}">
                change Pop
            </button>
        `;
    }
}

customElements.define('my-accessors',MyAccessors)
