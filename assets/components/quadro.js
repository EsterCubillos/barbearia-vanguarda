import { LitElement, html, css } from "lit";

export class Quadro extends LitElement {
  static styles = [
    css`
      :host {
        display: flex; /*autolayout*/
        width: 334px;
        height: 260px;
        justify-content: center;
        align-items: center;

        border-radius: 8px;
        background: #d9d9d9;
        box-shadow: 0px 24px 34px 0px rgba(0, 0, 0, 0.25);

        overflow:hidden;
        




      }
    `,
  ];

  render() {
    return html`<slot>imagem</slot>`;
  }
}
customElements.define("app-quadro", Quadro);
