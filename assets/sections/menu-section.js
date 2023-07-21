import { LitElement, html, css } from "lit";

export class MenuSection extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      dialog {
        z-index: 110;
        display: flex;
        width: 360px;
        height: 640px;
        padding: 32px;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex-shrink: 0;
        box-sizing:border-box;
      }
    `,
  ];

  render() {
    return html`
      <dialog open>
        <app-logo></app-logo>

        <nav>
          <a href="">Unidades</a>
          <a href="">Contato</a>
          <a href="servicos-section">Serviços</a>
          <a href="a-barbearia">A barbearia</a>
          <a href="/">Home</a>
        </nav>
      </dialog>
    `;
  }
}
customElements.define("menu-section", MenuSection);
