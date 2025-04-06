import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
//sin cambiar el nombre de la variable por defecto
// import DEV_LAN,{ person,sayHello } from './modules.js'
// cambiando el nombre de la variable exportada por defecto
// poniendo un alias a la variable exportada normal
import mainLanguage,{ person as personObject,sayHello } from './modules.js'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

console.log(personObject);
sayHello();
// console.log(DEV_LAN);
console.log(mainLanguage);