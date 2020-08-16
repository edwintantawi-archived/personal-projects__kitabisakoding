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
                <a class="nav-link" href="../../index.html">Home</a>
              </li>
              <li class="nav-item ml-lg-4">
                <a class="nav-link" href="../../pages/kelas/dashboard-kelas.html">Kelas</a>
              </li>
              <li class="nav-item ml-lg-4">
                <a class="nav-link" href="#section3">Artikel</a>
              </li>
              <li class="nav-item ml-lg-4">
                <a class="nav-link" href="#">Koran</a>
              </li>


              <li class="nav-item d-none justify-content-between mt-3 mt-md-0" id="gateway">
                <a href="/pages/gateway/masuk.html" class="btn btn-outline-success  mr-md-3 ml-lg-5 masuk">Masuk</a>
                <a href="/pages/gateway/daftar.html" class="btn btn-outline-warning daftar">Daftar</a>
              </li>

              <div class="dropdown-divider dividerTwo"></div>


              <li class="nav-item ml-md-4 mt-2 mt-md-0 d-none" id="userNav">
                <a href="#" class="nav-link">
              
                  <img id="user" src="/assets/img/social-media/user.jpg"></img>

                  <strong class="d-inline d-md-none ml-2">Username</strong>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);