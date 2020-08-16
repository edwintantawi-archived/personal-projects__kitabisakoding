class InfoSet extends HTMLElement {
  connectedCallback() {
    this.render();
  }


  render() {
    this.innerHTML = `
    <div class="alert">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
      Website is Under Build, all features in here doesn't works | Website ini dalam proses pembuatan, semua fitur di
      sini tidak dapat digunakan
    </div>
    `;
  }
}

customElements.define("info-set", InfoSet);