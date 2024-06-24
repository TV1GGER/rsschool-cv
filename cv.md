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

***

### Education/Courses:

- November 01, 2023 completed the "JS/FE PRE-SCHOOL 2023Q2 (JAVASCRIPT)" RS School course ([my certificate](https://app.rs.school/certificate/o7q0rj39))
- March 04, 2023 completed the "JS/FE Pre-School 2022Q4" RS School course ([my certificate](https://app.rs.school/certificate/hcrttvje))
- December, 2022 completed the: "JavaScript: Perfect for Beginners", "HTML: Perfect for Beginners", "CSS: Free Online Learning for Beginners" (from https://code-basics.com) 
- Self-education through YouTube video tutorials
- August 10, 2022 went to the course "QA Start" at https://edu.academiait.ru
- 08/26/2022, participated in the webinar "Beginner's Guide to Careers in Tech", EPAM
- 11/24/2022 successfully completed the course "Software Testing Introduction(RUS)", Svyatoslav Kulikov(EPAM)
- 2021, passed simulators "Fundamentals of HTML, JS, CSS.", htmlacademy.ru 
- 11/26/2021 completed the "Fundamentals of Software Testing" course at https://practicum.yandex.ru/. 
- 2007-2012 "Polotsk State University", majoring in "Modeling and computer design of radio-electronic means", qualification: engineer in radio electronics.
- 2003-2007 "Novopolotsk State Polytechnic College", specializing in "Automation of technological processes and production", qualified: electrical engineer, profession: instrumentation and automation fitter.
- 2002-2002 "Institute for advanced training and retraining of managers and specialists of the educational institution Polotsk State University", specialty: "PC operator-user".

***

##### *My level of English (as measured by the EPAM Training Center tests)*: B2