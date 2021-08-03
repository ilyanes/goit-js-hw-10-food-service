import createMenuMarkup from '../templates/menuCards.hbs';
import menu from '../data/menu.json';

// console.log(createMenuMarkup(menu));

(function () {
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const refs = {
    menuList: document.querySelector('.js-menu'),
    switcher: document.querySelector('#theme-switch-toggle'),
    body: document.body,
  };

  const state = JSON.parse(localStorage.getItem('theme'));

  refs.body.classList.add(state?.theme ? state.theme : Theme.LIGHT);
  refs.switcher.checked = state?.checked;

  refs.menuList.innerHTML = createMenuMarkup(menu);

  refs.switcher.addEventListener('change', changeTheme);
  function changeTheme({ target: { checked } }) {
    checked ? toggleTheme(Theme.DARK, Theme.LIGHT) : toggleTheme(Theme.LIGHT, Theme.DARK);
  }
  function toggleTheme(add, rem) {
    refs.body.classList.replace(rem, add);
    const state = {
      theme: add,
      checked: add === Theme.DARK,
    };
    localStorage.setItem('theme', JSON.stringify(state));
  }
})();
