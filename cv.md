> # **Markdown CV**
![**Dzianis Perahudau**](https://i.ibb.co/vd3qfh1/Photo-main.png)
## **Dzianis Perahudau**

### **Contacts:**

##### *Phone: +375 33 6101231*

##### *E-mail: tvigger@yandex.ru*

##### *Telegram: [@tvigger](https://t.me/tvigger)*

##### *GitHub: [tv1gger](https://github.com/TV1GGER)*

##### *linkedin: [Dzianis Perahudau](https://www.linkedin.com/in/dzianis-perahudau-46a9b6277)*

##### *Discord: Dzianis Perahudau(@tv1gger)*

***

### My priorities:
 Get theoretical knowledge and consolidate it in practice, constantly upgrade Soft and Hard skills.
 
***

### My goals:
 Develop in the IT field in the areas of Frontend Dev and QA-Manual (hereinafter QA-Automation). 
 
***

### Personal qualities:

  - readiness for constant self-development
  - sociability
  - ability to learn quickly
  - attentiveness
  - purposefulness
  - independence
  - logical thinking
    
***

### Skills: 

 Git, GitHub, VS Code, CSS3, SCSS, HTML5, JavaScript, WebPack, React, Node.JS, Chrome DevTools, Figma, MS Excel/Word, Adobe Photoshop, Jira, Bug Reporting.
 
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

### Examples of my applications:

- [Audio player](https://tv1gger.github.io/stage023/audio-player/index.html)
- ["Hedgehog in the fog" game](https://tv1gger.github.io/stage023/random-game/index.html)
- [Momentum](https://tv1gger-momentum.netlify.app/)
- [Library](https://tv1gger.github.io/stage023/library/index.html)
- ["Hangman" game](https://rolling-scopes-school.github.io/tv1gger-JSFE2023Q4/hangman/)
- [Image galery](https://tv1gger.github.io/stage023/image-galery/index.html)
- [cssBayan](https://tv1gger.github.io/cssBayan/cssBayan/)
- [Virtual keyboard](https://tv1gger.github.io/virtual-keyboard/)
- [CssMemeSlider](https://tv1gger.github.io/cssMemeSlider/cssMemeSlider/index.html)