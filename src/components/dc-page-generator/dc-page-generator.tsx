import { Component, Host, h, State, Element } from '@stencil/core';

@Component({
  tag: 'dc-page-generator',
  styleUrl: 'dc-page-generator.scss',
  shadow: true,
})
export class DcPageGenerator {
  @Element() el: HTMLElement;
  @State() pageQuantity: number = 1;
  @State() types: string = '+';
  @State() topMin: string = '0';
  @State() topMax: string = '10';
  @State() bottomMin: string = '0';
  @State() bottomMax: string = '10';
  @State() key: number = Date.now();

  handleSubmit(event: Event) {
    event.preventDefault();
    const checkboxes = this.el.shadowRoot.querySelectorAll('fieldset input');
    const pageQty = this.el.shadowRoot.querySelector('#pageQty');
    const topMin = this.el.shadowRoot.querySelector('#topmin');
    const topMax = this.el.shadowRoot.querySelector('#topmax');
    const bottomMin = this.el.shadowRoot.querySelector('#bottommin');
    const bottomMax = this.el.shadowRoot.querySelector('#bottommax');

    this.key = Date.now();

    this.pageQuantity = +(pageQty as HTMLInputElement).value;
    this.topMin = (topMin as HTMLInputElement).value;
    this.topMax = (topMax as HTMLInputElement).value;
    this.bottomMin = (bottomMin as HTMLInputElement).value;
    this.bottomMax = (bottomMax as HTMLInputElement).value;

    this.types = Array.from(checkboxes)
      .map((elem: HTMLInputElement) => {
        return elem.checked ? elem.value : '';
      })
      .join('');
  }

  render() {
    return (
      <Host>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label htmlFor="pageQty">Number of pages</label>
            <input id="pageQty" type="number" value={this.pageQuantity} />
          </div>
          <fieldset>
            <legend>Choose your equation types</legend>
            <div>
              <label htmlFor="add">Addition</label>
              <input id="add" type="checkbox" value="+" checked={this.types.includes('+')} />
            </div>
            <div>
              <label htmlFor="subtract">Subtraction</label>
              <input id="subtract" type="checkbox" value="-" checked={this.types.includes('-')} />
            </div>
            <div>
              <label htmlFor="multiply">Multiplication</label>
              <input id="multiply" type="checkbox" value="*" checked={this.types.includes('*')} />
            </div>
            <div>
              <label htmlFor="divide">Division</label>
              <input id="divide" type="checkbox" value="/" checked={this.types.includes('/')} />
            </div>
          </fieldset>
          <fieldset>
            <legend>Choose range for top number</legend>
            <div>
              <label htmlFor="min">Smallest top number</label>
              <input id="topmin" type="number" value={this.topMin} />
            </div>
            <div>
              <label htmlFor="max">Largest top number</label>
              <input id="topmax" type="number" value={this.topMax} />
            </div>
          </fieldset>
          <fieldset>
            <legend>Choose range for bottom number</legend>
            <div>
              <label htmlFor="min">Smallest bottom number</label>
              <input id="bottommin" type="number" value={this.bottomMin} />
            </div>
            <div>
              <label htmlFor="max">Largest bottom number</label>
              <input id="bottommax" type="number" value={this.bottomMax} />
            </div>
          </fieldset>
          <button type="submit">Generate new pages</button>
        </form>
        <div key={this.key}>
          {[...Array(+this.pageQuantity).keys()].map(number => (
            <dc-equation-grid
              key={+this.key + number}
              type={this.types}
              topMin={this.topMin}
              topMax={this.topMax}
              bottomMin={this.bottomMin}
              bottomMax={this.bottomMax}
            ></dc-equation-grid>
          ))}
        </div>
      </Host>
    );
  }
}
