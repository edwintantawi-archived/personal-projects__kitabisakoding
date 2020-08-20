class UiSyntax extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute('src');
    this.render();
  }

  render() {

    this.innerHTML = `
    <div class="container-fluid d-flex justify-content-center">
            <div class="row frame">
              <div class="">
                <iframe
                  src="${this.src}"
                  style="width: 1024px; height: 332px; border:0; transform: scale(1); overflow:scroll;"
                  sandbox="allow-scripts allow-same-origin">
                </iframe>
              </div>
            </div>
          </div>
    `
  };
}

customElements.define("ui-syntax", UiSyntax);