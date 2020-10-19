const THEME = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  themeSwitcher: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.body.classList.add(THEME.LIGHT);
getTheme();

refs.themeSwitcher.addEventListener('change', onThemeSwitcher);

function onThemeSwitcher() {
  changeTheme();
  setTheme(refs.body.classList);
}

function changeTheme() {
  if (refs.themeSwitcher.checked) {
    refs.body.classList.replace(THEME.LIGHT, THEME.DARK);
  } else {
    refs.body.classList.replace(THEME.DARK, THEME.LIGHT);
  }
}

function setTheme(theme) {
  localStorage.setItem('theme', theme);
}

function getTheme() {
  const sevedTheme = localStorage.getItem('theme');

  if (sevedTheme === THEME.DARK) {
    refs.themeSwitcher.checked = true;
    changeTheme();
  }
}
