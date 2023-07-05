import { customElement, property } from 'lit/decorators.js';
import { html, LitElement, unsafeCSS } from 'lit';
import styles from './action-bar.scss?inline';
import { classMap } from 'lit/directives/class-map.js';
import { JumpActionButton } from '../jump-action-button/jump-action-button';

@customElement('action-bar')
export class ActionBar extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true })
  visible: boolean = false;

  firstUpdated() {
    this.initActionButtonListener();
  }

  /**
   * Listens to the change event dispatched from any jump action buttons.
   * If the jump action button is visible, the action bar hides itself,
   * and vice versa.
   */
  initActionButtonListener() {
    const actionButton = document.querySelector(
      'jump-action-button'
    ) as JumpActionButton;
    // Skip if no action buttons found.
    if (!actionButton) {
      return;
    }
    actionButton.addEventListener('change', () => {
      // Make the action bar visible only if the action button is not visible.
      this.visible = !actionButton.visible;
    });
  }

  override render() {
    return html`
      <div class=${classMap({
        frame: true,
        'frame--visible': this.visible,
      })}><div class=${classMap({
      container: true,
      'container--visible': this.visible,
    })}><slot></slot></div></div>
    `;
  }
}
