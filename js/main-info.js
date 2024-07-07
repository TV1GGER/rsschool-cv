const mainInfo = [{
  about: "My hobby is sports. I like the gym. It helps me to relax after work. My strong points (strengths) are : I'm detail-oriented, I have good analytical skills, I'm a fast learner, I'm responsible.I have solid knowledge in computer operation. My weak points are: sometimes I lack confidence; I focus too much on the details, I' m a perfectionist.",
  priorities: "Get theoretical knowledge and consolidate it in practice, constantly upgrade Soft and Hard skills.",
  goals: "Develop in the IT field in the areas of QA-Manual (hereinafter QA-Automation) and Frontend Dev.",
  qualities: "<ul><li>readiness for constant self-development</li><li>sociability</li><li>ability to learn quickly</li><li>attentiveness</li><li>purposefulness</li><li>independence</li><li>logical thinking</li></ul>",
  codeExample: `async function getQuotes() {
  let quotes='';</br>

  if(localStorage.getItem('lanDate') === 'ru'){</br>
      quotes = './js/data.json';</br>
  }</br>
  if(localStorage.getItem('lanDate') === 'en'){</br>
      quotes = './js/data-en.json';</br>
  }</br>
  const res = await fetch(quotes);</br>
  const data = await res.json(); </br>
  quote.textContent = '"' + data[randNum].text + '"';</br>
  author.textContent = data[randNum].author;</br>
}</br>`,
  edu: "<ul><li>November 01, 2023 completed the “JS/FE PRE-SCHOOL 2023Q2 (JAVASCRIPT)” RS School course (<a href='https://app.rs.school/certificate/o7q0rj39' target='_blank'>my certificate</a>)</li><li>March 04, 2023 completed the “JS/FE Pre-School 2022Q4” RS School course (<a href='https://app.rs.school/certificate/hcrttvje' target='_blank'>my certificate</a>)</li><li>December, 2022 completed the: “JavaScript: Perfect for Beginners”, “HTML: Perfect for Beginners”, “CSS: Free Online Learning for Beginners” (from https://code-basics.com)</li><li>Self-education through YouTube video tutorials</li><li>08/26/2022, participated in the webinar “Beginner’s Guide to Careers in Tech”, EPAM</li><li>11/24/2022 successfully completed the course “Software Testing Introduction(RUS)”, Svyatoslav Kulikov(EPAM)</li><li>2021, passed simulators “Fundamentals of HTML, JS, CSS.”, htmlacademy.ru</li><li>2007-2012 “Polotsk State University”, majoring in “Modeling and computer design of radio-electronic means”, qualification: engineer in radio electronics.</li><li>2003-2007 “Novopolotsk State Polytechnic College”, specializing in “Automation of technological processes and production”, qualified: electrical engineer, profession: instrumentation and automation fitter.</li><li>2002-2002 “Institute for advanced training and retraining of managers and specialists of the educational institution Polotsk State University”, specialty: “PC operator-user”.</li></ul>",
  app: '<ul><li><a href="https://tv1gger.github.io/stage023/audio-player/index.html" target="_blank">Audio player</a></li><li><a href="https://tv1gger.github.io/stage023/random-game/index.html" target="_blank">`Hedgehog in the fog` game</a></li><li><a href="https://tv1gger-momentum.netlify.app/" target="_blank">Momentum</a></li><li><a href="https://tv1gger.github.io/stage023/library/index.html" target="_blank">Library</a></li><li><a href="https://rolling-scopes-school.github.io/tv1gger-JSFE2023Q4/hangman/" target="_blank">`Hangman` game</a></li><li><a href="https://tv1gger.github.io/stage023/image-galery/index.html" target="_blank">Image galery</a></li><li><a href="https://tv1gger.github.io/cssBayan/cssBayan/" target="_blank">cssBayan</a></li><li><a href="https://tv1gger.github.io/virtual-keyboard/" target="_blank">Virtual keyboard</a></li><li><a href="https://tv1gger.github.io/cssMemeSlider/cssMemeSlider/index.html" target="_blank">CssMemeSlider</a></li></ul>',
  english: 'B2 (as measured by the EPAM Training Center tests)',
}]

export {mainInfo};