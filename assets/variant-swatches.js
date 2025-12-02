class VariantSwatches extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback(){
        console.log(this.querySelectorAll(".swatch-image"));
    }
}
customElements.define('variant-swatches', VariantSwatches);