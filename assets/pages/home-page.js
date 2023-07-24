import { LitElement, html, css } from 'lit';

export class HomePage extends LitElement {
    
    render() {
        return html`
        <hero-section></hero-section>
        <a-barbearia-section></a-barbearia-section>
        <servicos-sectio></servicos-sectio>
        <contato-section></contato-section>
        <unidades-section></unidades-section>
        `;
    }
}
customElements.define('app-home-page', HomePage);
