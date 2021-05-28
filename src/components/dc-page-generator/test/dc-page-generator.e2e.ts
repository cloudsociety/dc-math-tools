import { newE2EPage } from '@stencil/core/testing';

describe('dc-page-generator', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dc-page-generator></dc-page-generator>');

    const element = await page.find('dc-page-generator');
    expect(element).toHaveClass('hydrated');
  });
});
