const userStatus = user => {
  if (user) {
    userNav.classList.add('d-block');
    bannerRegisterButton.classList.add('d-none');
    bannerAds.classList.add('d-none');
  } else {
    gateway.classList.add('d-flex');
    dividerTwo.classList.add('d-none');
  }
}

if (accountMode == false) {
  userNav.classList.add('d-none');
  gateway.classList.add('d-none');
  dividerTwo.classList.add('d-none');

  bannerRegisterButton.classList.add('d-none');
  bannerAds.classList.add('d-none');
} else {
  userStatus(user);
}