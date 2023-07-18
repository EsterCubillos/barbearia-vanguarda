import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      button {
        display: block;
        display: inline-flex;
        width: 132px;
        height: 31px;
        padding: 10px 24px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;

     
        border-radius: 8px;
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0.2) 100%
          ),
          var(--tom-2, #b38962);
        box-shadow: 0px 2px 4px 0px  #665e57;

        /* tipografia */

        color: var(--tom-3, #664e38);
        text-align: justify;
        font-family: var(--fonte-titulo);
        font-size: 1rem;
        font-style:normal;
        font-weight: 700;
        line-height: normal;
        white-space:nowrap;

        transition: all 200s;
        cursor: pointer;
      }
      button:hover button:active {
        background-color: var(--tom-2 #664e38);
      }
    `,
  ];

  render() {
    return html`<button><slot>pressione</slot></button>`;
  }
}
customElements.define("app-botao", Botao);
