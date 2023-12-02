import { LitElement,css, html, render } from 'lit';


export class MyConverter extends LitElement {

    static get styles() {
        return css`
            span {
                color: red;
            }
        `;
    }
    static get properties() {
        return {
            myProp: {
                reflect: true,
                converter: {
                    toAttribute(value){
                        console.log('MyProp\'s to Attribute');
                        console.log('Procesing: ', value, typeof(value));
                        let retVal = String(value);
                        console.log('Returning: ', retVal, typeof(retVal));
                        return retVal;
                    },
                    fromAttribute(value) {
                        console.log('MyProp\'s from Attribute');
                        console.log('Procesing: ', value, typeof(value));
                        let retVal = Number(value);
                        console.log('Returning: ', retVal, typeof(retVal));
                        return retVal;
                    }
                }
            },
            theProp: {
                reflect: true,
                converter(value) {
                    console.log('The prop\'s converter');
                    console.log('Procesing: ', value, typeof(value));
                    let retVal = Number(value);
                    console.log('Returning: ', retVal, typeof(retVal));
                    return retVal;
                }
            }
        }
    };

    constructor(){
        super();
        this.myProp = 'myProp';
        this.theProp = 'theProp';
    }

    attributeChangedCallback(name, oldval, newval){
        super.attributeChangedCallback(name,oldval, newval);
    }

    render(){
        return html`
            <p>My Prop: <span>${this.myProp}</span> tipo: ${typeof(this.myProp)}</p>
            <p>The Prop: <span>${this.theProp}</span> tipo: ${typeof(this.theProp)}</p>

            <button @click="${this.changeProperties}">Change Properties</button>
            <button @click="${this.changeAttributes}">Change Atributes</button>
        `;
    }

    changeAttributes() {
        let randomString = Math.floor(Math.random()*100).toString();
        this.setAttribute('myProp', 'myProp' + randomString); 
        this.setAttribute('theProp', 'theProp' + randomString); 
        this.requestUpdate();
    }

    changeProperties() {
        let randomString = Math.floor(Math.random()*100).toString();
        this.myProp= 'myProp' + randomString;
        this.myProp= 'theProp' + randomString;
    }
}

customElements.define('my-converter',MyConverter);
