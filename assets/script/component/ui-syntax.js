class UiSyntax extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute('src');
    this.render();
  }

  render() {

    this.innerHTML = `
    <div class="container">
    <div class="row">
    <div class="frame">
    
    <iframe
    src="${this.src}"
    style=" height: 332px; border:0; transform: scale(1); overflow:scroll;"
    sandbox="allow-scripts allow-same-origin">
    </iframe>
    </div>

      </div>
    </div>
    `
  };
}

customElements.define("ui-syntax", UiSyntax);