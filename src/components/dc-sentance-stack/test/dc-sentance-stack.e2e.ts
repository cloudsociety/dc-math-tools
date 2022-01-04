import { newE2EPage } from '@stencil/core/testing';

describe('dc-sentance-stack', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dc-sentance-stack></dc-sentance-stack>');

    const element = await page.find('dc-sentance-stack');
    expect(element).toHaveClass('hydrated');
  });
});
