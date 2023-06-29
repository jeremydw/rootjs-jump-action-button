import { customElement, property } from 'lit/decorators.js';
import { html, LitElement, unsafeCSS } from 'lit';

@customElement('jump-action-button')
export class JumpActionButton extends LitElement {
  @property({ type: Boolean, reflect: true })
  visible?: boolean;

  override render() {
    return html`
      <div class=${classMap({
        container: 'container',
        'container--visible': this.visible,
      })}><button>Learn more</button></div>
    `;
  }
}
