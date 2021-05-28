import { newE2EPage } from '@stencil/core/testing';

describe('dc-addsub-equation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dc-addsub-equation></dc-addsub-equation>');

    const element = await page.find('dc-addsub-equation');
    expect(element).toHaveClass('hydrated');
  });
});
