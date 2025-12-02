 console.log("test");

 class VariantSwatches extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback(){
        console.log(this.querySelectorAll(".swatch-images"));
    }
}
customElements.define('variant-swatches', VariantSwatches);