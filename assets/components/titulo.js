import { LitElement, html, css } from "lit";

export class Titulo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        color: var(--cor-secundaria, #665e57);
        text-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.25);
        font-family: Exo;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    `,
  ];

  render() {
    return html`Título`;
  }
}
customElements.define("app-titulo", Titulo);