import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class Navbar extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
        box-sizing: border-box;
        height: 96px;
        display: flex;

        padding: 0px 32px;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;

        position: fixed;
        top: 0;
        z-index:100;
        mix-blend-mode:difference;
        color:white;
        transition: top 1s;
        
      }

      app-logo{
        background-color: white;
      }


      feather-icon{
        cursor: pointer;

      }
    `,
  ];

  render() {
    return html`
      <app-logo></app-logo>
      <feather-icon icon="menu" @click=${nav.abrir}></feather-icon>
    `;
  }
}
customElements.define("app-navbar", Navbar);
