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
        gap: 10px;

        border: 3px solid;
        border-image-source: linear-gradient(
          42deg,
          rgba(102, 78, 56, 0) 50%,
          rgba(102, 78, 56, 1) 100%
        );
        border-image-slice: 1;

        border-left: 0;
        border-bottom: 0;
        background-color:var(--tom-1)
      }

      app-paragrafo {
       
        width: 270px;

        text-align: justify;
        color: var(--tom-3, #664e38);
        font-family: var (--fonte-corpo);
        font-size: 16px;
        font-style: normal;
        letter-spacing:-1.424px;
        line-height: 140%
        
      }

      app-quadro {
        width: 358px;
        height: 358px;

        position: absolute;
        right: -82px;
        top: 106px;
        border-radius: 100%;
        z-index: -10;
      }

      app-bolinhas {
        width: 300px;
        height: 300px;
        display: flex;
        align-items: flex-start;
        gap: 10px;

        position: absolute;
        left: -150px;
        top: 72px;
        z-index: -20;

        --cor-bolinhas:var(--tom-3);
      }

      img {
        width: 358px;
        height: 358px;
      }
    `,
  ];

  render() {
    return html`
      <app-titulo>A Barbearia</app-titulo>
      <app-bolinhas></app-bolinhas>
      <app-quadro><img src="imagembarber.jpg" alt="Descrição da Imagem"></app-quadro>
          <article>
            <app-paragrafo
              >Bem-vindo à Barbearia Vanguarda, onde tradição e inovação se
              encontram para proporcionar cortes de cabelo e barbas impecáveis.
              Com uma equipe de barbeiros especializados, combinamos técnicas
              tradicionais com as últimas tendências, garantindo um atendimento
              personalizado em um ambiente acolhedor.</app-paragrafo
            >

            <app-botao><a href="a-barbearia">Leia mais</a></app-botao >
          </article>
        </app-quadro></app-quadro
      >
    `;
  }
}
customElements.define("a-barbearia-section", ABarbeariaSection);
