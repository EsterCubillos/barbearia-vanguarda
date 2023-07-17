import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class ABarbeariaSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        justify-content: space-between;
        align-items: flex-start;
      }

      article {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
      }

      app-paragrafo {
        width: 270px;

        text-align: justify;
        color: var(--tom-3, #664e38);
        font-family: var (--fonte-corpo);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    `,
  ];

  render() {
    return html`
      <app-titulo>A Barbearia</app-titulo>

      <article>
        <app-paragrafo
          >Bem-vindo à Barbearia Vanguarda, onde tradição e inovação se
          encontram para proporcionar cortes de cabelo e barbas impecáveis. Com
          uma equipe de barbeiros especializados, combinamos técnicas
          tradicionais com as últimas tendências, garantindo um atendimento
          personalizado em um ambiente acolhedor.</app-paragrafo
        >

        <app-botao>Leia mais</app-botao>
      </article>
    `;
  }
}
customElements.define("a-barbearia-section", ABarbeariaSection);
