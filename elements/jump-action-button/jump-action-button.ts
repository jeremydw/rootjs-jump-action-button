import { customElement, property } from 'lit/decorators.js';
import { html, LitElement, unsafeCSS } from 'lit';
import styles from './jump-action-button.scss?inline';
import { classMap } from 'lit/directives/class-map.js';

@customElement('jump-action-button')
export class JumpActionButton extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true })
  visible: boolean = false;

  @property()
  href: string = undefined;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this.updateVisibility.bind(this), {
      passive: true,
    });
    window.addEventListener('resize', this.updateVisibility.bind(this), {
      passive: true,
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this.updateVisibility.bind(this));
    window.removeEventListener('resize', this.updateVisibility.bind(this));
  }

  firstUpdated() {
    // Test within firstUpdated. The parent isn't available until firstUpdated runs.
    this.updateVisibility();
  }

  private updateVisibility() {
    this.visible = this.testVisibility();
    console.log('foo');
  }

  /**
   * Tests whether the button's parent element's bottom is scrolled past the bottom
   * of the viewport.
   */
  private testVisibility() {
    if (!this.parentElement) {
      return;
    }
    const elementRect = this.parentElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementBottom = elementRect.bottom;
    return elementBottom > viewportHeight;
  }

  override render() {
    return html`
      <div class=${classMap({
        frame: true,
        'frame--visible': this.visible,
      })}><div class=${classMap({
      container: true,
      'container--visible': this.visible,
    })}><a class="button" href="${this.href}"><slot></slot></a></div></div>
    `;
  }
}
