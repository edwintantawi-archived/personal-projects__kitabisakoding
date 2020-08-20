class UiNavbar extends HTMLElement {
  connectedCallback() {
    this.page = this.getAttribute('data-page');

    this.render();
  }


  render() {
    // active pages
    let activeT1, activeT2, activeT3, activeT4, activeT5;
    switch (this.page) {
      case 't1':
        activeT1 = 'active';
        activeT2 = 'nonActive';
        activeT3 = 'nonActive';
        activeT4 = 'nonActive';
        activeT5 = 'nonActive';

        break;
      case 't2':
        activeT1 = 'nonActive';
        activeT2 = 'active';
        activeT3 = 'nonActive';
        activeT4 = 'nonActive';
        activeT5 = 'nonActive';

        break;
      case 't3':
        activeT1 = 'nonActive';
        activeT2 = 'nonActive';
        activeT3 = 'active';
        activeT4 = 'nonActive';
        activeT5 = 'nonActive';

        break;
      case 't4':
        activeT1 = 'nonActive';
        activeT2 = 'nonActive';
        activeT3 = 'nonActive';
        activeT4 = 'active';
        activeT5 = 'nonActive';

        break;
      case 't5':
        activeT1 = 'nonActive';
        activeT2 = 'nonActive';
        activeT3 = 'nonActive';
        activeT4 = 'nonAktif';
        activeT5 = 'active';
        break;

      default:
        break;
    }

    this.innerHTML = `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark-blue p-3">
        <div class="container">
          <a href="/index.html" class="navbar-brand pb-1 pt-0 d-none d-md-block">
            <img src="/assets/img/kitaBisaKoding.png" alt="kita bisa koding" width="60px">
          </a>
          <a href="/index.html" class="navbar-brand pb-1 pt-0 d-block d-md-none">
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
                <a class="nav-link ${activeT1}" href="/index.html">Home</a>
              </li>
              <li class="nav-item ml-lg-4">
                <a class="nav-link ${activeT2}" href="/pages/kelas/kelas.html">Kelas</a>
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

customElements.define("ui-navbar", UiNavbar);

{
  /* <li class="nav-item ml-lg-4">
  <a class="nav-link ${activeT3} disable" href="#">Artikel</a>
  </li>
  <li class="nav-item ml-lg-4">
  <a class="nav-link ${activeT4}" href="#">Surat Kabar</a>
  </li>
  <li class="nav-item ml-lg-4">
  <a class="nav-link ${activeT5}" href="#">Komunitas</a>
  </li> */
}