import { newE2EPage } from '@stencil/core/testing';

describe('dc-page-sentences', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dc-page-sentences></dc-page-sentences>');

    const element = await page.find('dc-page-sentences');
    expect(element).toHaveClass('hydrated');
  });
});
