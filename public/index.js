const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

//when click on burger icon, if currently hidden, remove class so it shows -> converse true
burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
})