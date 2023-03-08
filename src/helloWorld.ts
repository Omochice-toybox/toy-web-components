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
    const shadow = this.attachShadow({ mode: "closed" })

    shadow.innerHTML = `
    <style>
      p {
        text-align: center;
        font-weight: normal;
        padding: 1em;
        margin: 0 0 2em 0;
        background-color: #eee;
        border: 1px solid #666;
      }
    </style>
    <p>Hello ${this.name}!</p>
    `
  }
}
