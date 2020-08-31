import './component/ui-navbar.js';

let user = false;

let accountMode = false;

const bannerRegisterButton = document.querySelector('a.btn.btn-warning');
const bannerAds = document.querySelector('#ads');

const userStatus = user => {
  if (user) {
    // bannerRegisterButton.classList.add('d-none');
    bannerAds.classList.add('d-none');
  } else {

  }
}

if (accountMode == false) {
  // bannerRegisterButton.classList.add('d-none');
  bannerAds.classList.add('d-none');
} else {
  userStatus(user);
}