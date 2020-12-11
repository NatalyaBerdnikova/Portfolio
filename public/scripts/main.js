let showMenu = document.querySelector('.js-header-show-button');
let headerMenu = document.querySelector('.header');

if (showMenu && headerMenu) {
  showMenu.addEventListener('click', function() {
    headerMenu.classList.toggle('header--visible');
  });
}
