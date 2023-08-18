/*
  Instantiates modules based on data-attributes specifying module file-names.
*/

const moduleElements = document.querySelectorAll('[data-module]')
//console.log("indexjs.loaded");
for (var i = 0; i < moduleElements.length; i++) {
  const el = moduleElements[i]
  const name = el.getAttribute('data-module')
  try {
    const Module = require(`./${name}`).default
    new Module(el)
  } catch (e) {
    // sink it
    console.error(`Can't find module: ./${name}`);
  }
}

/*
  Usage:
  ======

  html
  ----
  <button data-module="disappear">disappear!</button>

  js
  --
  // modules/disappear.js
  export default class Disappear {
    constructor(el) {
      el.style.display = 'none'
    }
  }
*/
