import './component/banner-wave.js';
import './component/nav-bar.js';
import './component/footer-set.js';
import './component/information-bar.js';


// hide/show daftar/masuk/user profile
let user = false;

const userNav = document.querySelector('#userNav');
const gateway = document.querySelector('#gateway');
const dividerTwo = document.querySelector('.dividerTwo');

// console.log(userNav.style.display = 'block');
// console.log(gateway.style.display);

if (user == true) {
  userNav.classList.add('d-block')
} else {
  gateway.classList.add('d-flex')
  dividerTwo.classList.add('d-none');
}