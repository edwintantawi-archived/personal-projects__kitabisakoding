class UiNavigation extends HTMLElement {
  connectedCallback() {
    this.back = this.getAttribute('data-back') || null;
    this.next = this.getAttribute('data-next') || null;
    this.out = this.getAttribute('data-out') || null;

    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="row">
    <div class="col-12 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between mt-5">

      <a href="${this.back}"
        class="btn btn-danger mb-2 mb-sm-0 order-2 order-sm-0"><span class="fas fa-angle-double-left"></span>
        KEMBALI</a>
      <div class="d-flex align-items-center justify-content-center order-3 order-sm-0 text-center">
        <a href="${this.out}">Keluar</a>
      </div>
      <a href="${this.next}" class="btn btn-success mb-2 mb-sm-0">LANJUT <span
          class="fas fa-angle-double-right"></span></a>
    </div>
  </div>
    `;
  }
}

customElements.define("ui-navigation", UiNavigation);