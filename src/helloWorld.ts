export class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.textContent = "Hello World!"
  }
}
