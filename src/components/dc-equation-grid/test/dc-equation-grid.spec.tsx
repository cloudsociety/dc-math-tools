import { newSpecPage } from '@stencil/core/testing';
import { DcEquationGrid } from '../dc-equation-grid';

describe('dc-equation-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DcEquationGrid],
      html: `<dc-equation-grid></dc-equation-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <dc-equation-grid>
        <mock:shadow-root>
          <div class="grid">
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
            <dc-addsub-equation max="10" min="0" type="+"></dc-addsub-equation>
          </div>
          <div class="results">
            <span>
              Date____________________
            </span>
            <span>
              Time__________minutes
            </span>
            <span>
              Score__________/50
            </span>
          </div>
        </mock:shadow-root>
      </dc-equation-grid>
    `);
  });
});
