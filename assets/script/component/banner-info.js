class BannerInfo extends HTMLElement {
  connectedCallback() {
    this.render();
  }


  render() {
    this.innerHTML = `
    <div class="alert">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
      Website ini dalam proses pengenbangan, sebagian fitur disini tidak dapat digunakan, kedepannya akan segera di perbaiki, Terimakasih
    </div>
    `;
  }
}

customElements.define("banner-info", BannerInfo);