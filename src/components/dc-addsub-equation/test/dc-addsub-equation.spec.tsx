import { newSpecPage } from '@stencil/core/testing';

jest.mock('../../../utils/getRandomInt');
import { DcAddsubEquation } from '../dc-addsub-equation';

describe('dc-addsub-equation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DcAddsubEquation],
      html: `<dc-addsub-equation></dc-addsub-equation>`,
    });
    expect(page.root).toEqualHtml(`
      <dc-addsub-equation>
        <mock:shadow-root>
        <div>
          42
        </div>
        <div>
          + 42
        </div>
        <hr>
        </mock:shadow-root>
      </dc-addsub-equation>
    `);
  });
});
