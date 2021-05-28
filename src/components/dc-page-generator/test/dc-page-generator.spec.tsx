import { newSpecPage } from '@stencil/core/testing';
import { DcPageGenerator } from '../dc-page-generator';

describe('dc-page-generator', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DcPageGenerator],
      html: `<dc-page-generator></dc-page-generator>`,
    });
    expect(page.root).toEqualHtml(`
      <dc-page-generator>
        <mock:shadow-root>
          <form>
            <div>
              <label htmlfor="pageQty">
                Number of pages
              </label>
              <input id="pageQty" type="number" value="1">
            </div>
            <fieldset>
              <div>
                <label htmlfor="add">
                  Addition
                </label>
                <input checked="" id="add" type="checkbox" value="+">
              </div>
              <div>
                <label htmlfor="subtract">
                  Subtraction
                </label>
                <input id="subtract" type="checkbox" value="-">
              </div>
              <div>
                <label htmlfor="multiply">
                  Multiplication
                </label>
                <input id="multiply" type="checkbox" value="*">
              </div>
              <div>
                <label htmlfor="divide">
                  Division
                </label>
                <input id="divide" type="checkbox" value="/">
              </div>
            </fieldset>
            <div>
              <label htmlfor="min">
                Smallest number for equations
              </label>
              <input id="min" type="number" value="0">
            </div>
            <div>
              <label htmlfor="max">
                Largest number for equations
              </label>
              <input id="max" type="number" value="10">
            </div>
            <button type="submit">
              Generate new pages
            </button>
          </form>
          <div>
            <dc-equation-grid max="10" min="0" type="+"></dc-equation-grid>
          </div>
        </mock:shadow-root>
      </dc-page-generator>
    `);
  });
});
