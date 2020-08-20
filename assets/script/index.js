import './component/ui-wave.js';
import './component/ui-navbar.js';
import './component/ui-footer.js';
import './component/banner-info.js';
import './component/ui-syntax.js';


// hide/show daftar/masuk/user profile
let user = false;

let accountMode = false;

const userNav = document.querySelector('#userNav');
const gateway = document.querySelector('#gateway');
const dividerTwo = document.querySelector('.dividerTwo');
const bannerRegisterButton = document.querySelector('a.btn.btn-warning');
const bannerAds = document.querySelector('#ads');