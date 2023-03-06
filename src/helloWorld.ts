export class HelloWorld extends HTMLElement {
  name: string;

  constructor() {
    super();
    this.name = "world";
  }

  attributeChangedCallback(prop: string, prev: string, next: string): void {
    if (prev === next) return;
    if (!Object.hasOwn(this, prop)) return;
    this[prop] = next;
  }

  static get observedAttributes(): string[] {
    return ["name"];
  }

  connectedCallback(): void {
    this.textContent = `Hello ${this.name}!`;
  }
}
