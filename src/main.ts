import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";
import { HelloWorld } from "./helloWorld";

function main(): void {
  const elm = document.querySelector<HTMLDivElement>("#app")
  if (elm == null) {
    throw TypeError("#app is nully")
  }

  elm.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <hello-world name="sample" />
  </div>
`;

  customElements.define("hello-world", HelloWorld);
  const counter = document.querySelector<HTMLButtonElement>("#counter")
  if (counter == null) {
    throw TypeError("#counter is nully")
  }
  setupCounter(counter);
}

main()
