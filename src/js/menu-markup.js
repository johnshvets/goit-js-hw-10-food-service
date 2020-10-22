import menu from './menu';
import menuTpl from '../templates/menu.hbs';

const jsMenu = document.querySelector('.js-menu');
const menuMarkup = menuTpl(menu);

jsMenu.insertAdjacentHTML('beforeend', menuMarkup);
