import { newSpecPage } from '@stencil/core/testing';
import { DcPageSentences } from '../dc-page-sentences';

describe('dc-page-sentences', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DcPageSentences],
      html: `<dc-page-sentences></dc-page-sentences>`,
    });
    expect(page.root).toEqualHtml(`
      <dc-page-sentences>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dc-page-sentences>
    `);
  });
});
