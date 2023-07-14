import { LitElement, html, css } from "lit";

export class HeroSection extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4.375rem;
        
       
      }
    `,
  ];

  render() {
    return html`
      <section>

        <app-titulo>Barbearia Vanguarda</app-titulo>
        <app-quadro></app-quadro>
      </section>
      <app-paragrafo>
      Obtenha um estilo impecável,
      do cabelo à barba
      </app-paragrafo>
    `;
  }
}
customElements.define("hero-section", HeroSection);
