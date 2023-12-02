import { LitElement, html, css } from 'lit';

class CustomHasChanged extends LitElement {
    static properties = {
        myProp: {
            type: Number,
            hasChanged(newVal, oldVal){
                if(newVal > oldVal){
                    console.log(`${newVal} > ${oldVal}. hasChanged: true.`);
                    return true;
                }
                else {
                    console.log(`${newVal} <= ${oldVal}. hasChanged: false`);
                }
            }
        }
    }

    constructor() {
        super();
        this.myProp = 1;
    }

    render(){
        return html `
            <p>myProp: ${this.myProp}</p>
            <button @click="${this.getNewVal}">get new val</button>
        `;
    }

    // update() {
    //     console.log('updated');
    // }
    /* Se retira el update ya que en navegador manda 
        que no es necesario implementar*/

    getNewVal() {
        let newVal = Math.floor(Math.random()*10);
        this.myProp = newVal;
    }
}

customElements.define('custom-has-changed', CustomHasChanged);
