export class HelloWorld extends HTMLElement {
  name: string;

  constructor() {
    super();
    this.name = "world";
  }

  attributeChangedCallback(prop: string, prev: string, next: string): void {
    if (prev === next) return;
    if (!Object.hasOwn(this, prop)) return;
    // eslint-disable-next-line
    // @ts-ignore: check by above
    this[prop] = next;
  }

  static get observedAttributes(): string[] {
    return ["name"];
  }

  connectedCallback(): void {
    const shadow = this.attachShadow({ mode: "closed" })
    const template = (<HTMLTemplateElement>document.getElementById("hello-world"))
      ?.content
      .cloneNode(true)
    const message = `Hello ${this.name}`

    Array.from(template.querySelectorAll(".sample-text") ?? [])
      .forEach((e) => {
        if (!(e instanceof Element)) return
        e.textContent = message
      })

    shadow.append(template)
  }
}
