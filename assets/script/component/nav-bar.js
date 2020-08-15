class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark-blue p-3">
        <div class="container">
          <a href="#" class="navbar-brand pb-1 pt-0 d-none d-md-block">
            <img src="/assets/img/kitaBisaKoding.png" alt="kita bisa koding" width="60px">
          </a>
          <a href="#" class="navbar-brand pb-1 pt-0 d-block d-md-none">
            <img src="/assets/img/kitaBisaKoding-txt.png" alt="kita bisa koding" width="60px">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <div class="dropdown-divider"></div>
              <li class="nav-item">
                <a class="nav-link" href="#section1">Home</a>
              </li>
              <li class="nav-item ml-lg-4">
                <a class="nav-link" href="#section2">Class</a>
              </li>
              <li class="nav-item ml-lg-4">
                <a class="nav-link" href="#section3">Article</a>
              </li>
              <li class="nav-item ml-lg-4">
                <a class="nav-link" href="#">News & Update</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);