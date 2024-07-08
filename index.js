import tagDescriptionList from './js/tag-description-list.js'
import {mainInfo} from './js/main-info.js'


// Get random text content from tag-description-list.js
const headerContentField= document.querySelector('.header-container__tag-field');

let tagDescriptionCount = 0;
let tagDescriptionCountPrevious = 0;

function getRandomNum() {
  tagDescriptionCount = Math.floor(Math.random() * Number(tagDescriptionList.length-1));
  if (tagDescriptionCount !== tagDescriptionCountPrevious) {
    tagDescriptionCountPrevious = tagDescriptionCount;
    return tagDescriptionCount;
  }
  if ((tagDescriptionCount < tagDescriptionList.length - 1) && (tagDescriptionCount === tagDescriptionCountPrevious)) {
    tagDescriptionCount += 1;
    tagDescriptionCountPrevious = tagDescriptionCount;
    return tagDescriptionCount;
  }
  if ((tagDescriptionCount === tagDescriptionList.length - 1) && (tagDescriptionCount === tagDescriptionCountPrevious)) {
    tagDescriptionCount -= 1;
    tagDescriptionCountPrevious = tagDescriptionCount;
    return tagDescriptionCount;
  }
  getRandomNum();
};

///

// FadeIn-FadeOut functionality for text in header

function fadeIn(el, timeOut) {
  el.style.opacity = '0';
  el.style.transition = `opacity ${timeOut}ms`;
  setTimeout(function addOpacity() {
    el.style.opacity = '0.4';
  }, 2200)
};

function fadeOut(el, timeOut) {
  el.style.opacity = '0.4';
  el.style.transition = `opacity ${timeOut}ms`;
  setTimeout(function removeOpacity() {
    el.style.opacity = '0';
  }, 2200)
};

let flagHeaderOpacity = false;

const checkHeaderOpacity = setInterval(function check() {
  if (flagHeaderOpacity === false) {
    let listNum = getRandomNum();
    headerContentField.textContent = `${tagDescriptionList[listNum].tag} - ${tagDescriptionList[listNum].description}`;
    fadeIn(headerContentField, 1300);
    flagHeaderOpacity = true;
  }
  if (flagHeaderOpacity = true) {
    fadeOut(headerContentField, 1300);
    flagHeaderOpacity = false;
  }
}, 3500);

///

// Menu list-item select

const basicContentText= document.querySelector('.basic-content__text');
const basicConten = document.querySelector('.basic-content');
const navListItem = document.querySelectorAll('.nav-list__item');
const basicContentHead = document.querySelector('.basic-content-head')
basicContentText.innerHTML = mainInfo[0]['about'];
  window.onload = function() {
  navListItem[0].classList.add('nav-list__item-selected');
};

let head = document.createElement("h2");
  basicConten.prepend(head);
  head.className = 'basic-content-head';
  head.textContent = 'About';

navListItem.forEach(el => el.addEventListener('click', (e) => {
  navListItem.forEach(itm => {
    itm.classList.remove('nav-list__item-selected');
  });
  el.classList.add('nav-list__item-selected');
  basicContentText.innerHTML = mainInfo[0][el.id];
  head.textContent = el.id[0].toUpperCase() + el.id.slice(1);
}));

///