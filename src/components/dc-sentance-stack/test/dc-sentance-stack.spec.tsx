import { newSpecPage } from '@stencil/core/testing';
import { DcSentanceStack } from '../dc-sentance-stack';

describe('dc-sentance-stack', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DcSentanceStack],
      html: `<dc-sentance-stack></dc-sentance-stack>`,
    });
    expect(page.root).toEqualHtml(`
      <dc-sentance-stack>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dc-sentance-stack>
    `);
  });
});
