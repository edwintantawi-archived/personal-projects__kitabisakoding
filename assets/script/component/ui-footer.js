class UiFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }


  render() {
    this.innerHTML = `
    <footer class="pt-5 pb-1 bg-dark-blue">
    <div class="container">
      <div class="row">
        <div class="col-3 col-md-2">
          <img src="/assets/img/kitaBisaKoding-txt.png" alt="" width="100%">
        </div>
        <div class="col-12 col-md-6 offset-0 offset-md-1 order-1 order-md-0 mt-5 mt-md-0">
          <h5 class="ml-1"><b>About</b></h5>
          <ul class="pl-3 about">
            <li><b>Founder</b> : <a href="https://instagram.com/wintantawi">Edwin Tantawi</a></li>
            <li><b>Location</b> : Medan, Indonesia</li>
            <li><b>e-Mail</b> : <a href="mailto:kitabisakoding@gmail.com" target="_blank">kitabisakoding@gmail.com</a></li>
          </ul>
        </div>
        <div class="col-7 offset-1 offset-md-0 col-md-3">
          <div class="container">
            <div class="row">
              


            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-12 text-center">
          <p>Copyright &copy; 2020 - KitaBisaKoding</p>
        </div>
      </div>

    </div>
  </footer>
    `;
  }
}

customElements.define("ui-footer", UiFooter);

{
  /* <div class="col-4"></div>
                  <a href="#">
                    <img src="/assets/img/social-media/wa.png" alt="whatsapps" width="100%">
                  </a>
                </div>
                <div class="col-4">
                  <a href="#">
                    <img src="/assets/img/social-media/fb.png" alt="facebook" width="100%">
                  </a>
                </div>
                <div class="col-4">
                  <a href="https://instagram.com/kitabisakoding" target="_blank">
                    <img src="/assets/img/social-media/ig.png" alt="instagram" width="100%">
                  </a>           </div> */
}