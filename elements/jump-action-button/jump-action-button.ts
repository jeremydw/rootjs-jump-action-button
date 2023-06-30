import { customElement, property } from 'lit/decorators.js';
import { html, LitElement, unsafeCSS } from 'lit';
import styles from './jump-action-button.scss?inline';

@customElement('jump-action-button')
export class JumpActionButton extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true })
  visible?: boolean;

  connectedCallback() {
    super.connectedCallback();
  }

  private testVisibility() {
    const elementRect = this.parentElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementBottom = elementRect.bottom;
    return elementBottom < viewportHeight;
  }

  override render() {
    return html`
      <div class="frame"><div class=${classMap({
        container: 'container',
        'container--visible': this.visible,
      })}><button>Learn more</button></div></div>
    `;
  }
}
