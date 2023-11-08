 # __Dzianis Perahudau__


![Photo](https://i.ibb.co/tJbS2DV/IMG-20220824-085738999999.jpg)

### **Contacts:**

##### *Phone: +375 33 6101231*

##### *E-mail: tvigger@yandex.ru*

##### *Telegram: [@tvigger](https://t.me/tvigger)*

##### *GitHub: [tv1gger](https://github.com/TV1GGER)*

##### *linkedin: [Dzianis Perahudau](https://www.linkedin.com/in/dzianis-perahudau-46a9b6277)*

***

### My priorities:
 Get theoretical knowledge and consolidate it in practice, constantly upgrade Soft and Hard skills.

***

### My goals:
 Develop in the IT field in the areas of Frontend Dev and QA-Manual (hereinafter QA-Automation). 

***

### Personal qualities:

  - readiness for constant self
  - development
  - sociability
  - ability to learn quickly
  - attentiveness
  - purposefulness
  - activity
  - independence
  - logical thinking
  
***

### Skills: 

 Git, GitHub, VS Code, CSS3, SCSS, HTML5, JavaScript, Chrome DevTools, Figma, MS Excel/Word, Adobe Photoshop, Jira, Bug Reporting.
 

***

### Code example:

```javascript


// Results table

const resultsTable = document.querySelector('.results-table');

function loadDaraFromStorage() {
  let storageItemCount = 1;
  for(let b = 1; b < 11; b += 1) {
    if ((localStorage.getItem(b)) && (storageItemCount < 11)) {
      const listItem = document.createElement('div');
      listItem.classList.add('list-item');
      listItem.id = storageItemCount;
      listItem.innerHTML = storageItemCount+'.'+ ' ' + localStorage.getItem(storageItemCount);
      resultsTable.appendChild(listItem);
      storageItemCount++;
    }
  }
};

const headerListItem = document.querySelector('.header-list-item');
const resultsTableWrapper = document.querySelector('.results-table-wrapper');
const resultsTableOutsideClickWrapper = document.querySelector('.results-table-outside-click-wrapper');

headerListItem.addEventListener('click', () => {
  resultsTableWrapper.classList.add('results-table-wrapper-open');
  resultsTableOutsideClickWrapper.classList.add('results-table-outside-click-wrapper-active');
  loadDaraFromStorage();
});

resultsTableOutsideClickWrapper.addEventListener('click', () => {
  resultsTableWrapper.classList.remove('results-table-wrapper-open');
  resultsTableOutsideClickWrapper.classList.remove('results-table-outside-click-wrapper-active');
  for (let m = 0; m < 11; m += 1){
    if(document.getElementById(m)){
      resultsTable.removeChild(document.getElementById(m));
    }
  }
});

```

***

### Experience:


- [X] [Link to deployed version of 'random-game'](https://tv1gger.github.io/stage023/random-game/).

- [X] "Momentum" task. Skills used: JavaScript, Git, GitHub, CSS3, HTML5, Figma, Chrome DevTools, VS Code. [Link to task](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/momentum/momentum-stage1.md). [Link to deployed version](https://tv1gger-momentum.netlify.app/).

- [X] [Link to deployed version of 'audio-player'](https://tv1gger.github.io/stage023/audio-player/).

- [X] [Link to deployed version of 'css Meme Slider'](https://tv1gger.github.io/cssMemeSlider/cssMemeSlider/index.html).

- [X] [Link to deployed version of 'css Bayan'](https://tv1gger.github.io/cssBayan/cssBayan/).