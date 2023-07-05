import './styles.scss';
import ButtonGroup from '@/components/ButtonGroup';

export function Page() {
  return (
    <>
      <div style="text-align: center; height: 680px; border: 1px dotted blue; padding: 20px; box-sizing: border-box;">
        <h1>Hero Module</h1>
        <p>
          Jump action button only appears if the hero module's bottom is not
          scrolled past the viewport bottom. To test, ensure the viewport is
          shorter than 680px.
        </p>
        <jump-action-button href="#next">Explore more</jump-action-button>
        <action-bar>
          <button>Button 1</button>
          <button>Button 2</button>
        </action-bar>
      </div>
      <div
        style="height: 1000px; border: 1px dotted green; padding: 20px; box-sizing: border-box;"
        id="next"
      >
        Next Module
      </div>
    </>
  );
}

export default Page;
