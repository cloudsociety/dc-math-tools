import { newE2EPage } from '@stencil/core/testing';

describe('dc-equation-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dc-equation-grid></dc-equation-grid>');

    const element = await page.find('dc-equation-grid');
    expect(element).toHaveClass('hydrated');
  });
});
