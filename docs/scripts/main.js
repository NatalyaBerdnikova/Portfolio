let showMenu = document.querySelector('.js-header-show-button');
let headerMenu = document.querySelector('.header');
let body = document.querySelector('body')

if (showMenu && headerMenu) {
  showMenu.addEventListener('click', function() {
    headerMenu.classList.toggle('header--visible');
    body.classList.toggle('no-scroll');
  });
}

let switchSectionButtons = document.querySelectorAll('.js-header-link');

let switchActiveButton = function (button) {
  const activeClass = 'header__navigation-link--active';
  let activeButton = document.querySelector('.' + activeClass);

  activeButton.classList.remove(activeClass);
  button.classList.add(activeClass);
}

let switchActiveSection = function (button) {
  const activeClass = 'section--active';
  let activeSection = document.querySelector('.' + activeClass);
  let switchSection = document.getElementById(button.dataset.section);

  activeSection.classList.remove(activeClass);
  switchSection.classList.add(activeClass);
}

if (switchSectionButtons) {
  for (let i = 0; i < switchSectionButtons.length; i++) {
    switchSectionButtons[i].addEventListener('click', function() {
      switchActiveButton(switchSectionButtons[i]);
      switchActiveSection(switchSectionButtons[i]);
      headerMenu.classList.remove('header--visible');
      body.classList.remove('no-scroll');
    })
  }
}
