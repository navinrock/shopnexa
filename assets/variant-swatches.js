class VariantSwatches extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.querySelectorAll(".swatch-image").forEach((swatch) => {
      swatch.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();

        const main_image = e.target
          .closest(".card-wrapper")
          .querySelector(".card__media .media img");

        let newImage = e.target.src.replace("width=100", "width=600");

        main_image.setAttribute("src", newImage);
        main_image.removeAttribute("srcset");
      });
    });
  }
}

customElements.define("variant-swatches", VariantSwatches);
