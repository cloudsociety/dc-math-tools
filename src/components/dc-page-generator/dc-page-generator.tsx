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
  @State() min: string = '0';
  @State() max: string = '10';
  @State() key: number = Date.now();

  handleSubmit(event: Event) {
    event.preventDefault();
    const checkboxes = this.el.shadowRoot.querySelectorAll('fieldset input');
    const pageQty = this.el.shadowRoot.querySelector('#pageQty');
    const min = this.el.shadowRoot.querySelector('#min');
    const max = this.el.shadowRoot.querySelector('#max');

    this.key = Date.now();

    this.pageQuantity = +(pageQty as HTMLInputElement).value;
    this.min = (min as HTMLInputElement).value;
    this.max = (max as HTMLInputElement).value;

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
          <div>
            <label htmlFor="min">Smallest number for equations</label>
            <input id="min" type="number" value={this.min} />
          </div>
          <div>
            <label htmlFor="max">Largest number for equations</label>
            <input id="max" type="number" value={this.max} />
          </div>
          <button type="submit">Generate new pages</button>
        </form>
        <div key={this.key}>
          {[...Array(+this.pageQuantity).keys()].map(number => (
            <dc-equation-grid key={+this.key + number} type={this.types} max={this.max} min={this.min}></dc-equation-grid>
          ))}
        </div>
      </Host>
    );
  }
}
