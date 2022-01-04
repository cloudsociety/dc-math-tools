import { Component, Host, h, Element, State } from '@stencil/core';

@Component({
  tag: 'dc-page-sentences',
  styleUrl: 'dc-page-sentences.css',
  shadow: true,
})
export class DcPageSentences {
  @Element() el: HTMLElement;
  @State() pageQuantity: number = 1;
  @State() min: string = '1000';
  @State() max: string = '100000';
  @State() key: number = Date.now();

  handleSubmit(event: Event) {
    event.preventDefault();
    const pageQty = this.el.shadowRoot.querySelector('#pageQty');
    const min = this.el.shadowRoot.querySelector('#min');
    const max = this.el.shadowRoot.querySelector('#max');

    this.key = Date.now();

    this.pageQuantity = +(pageQty as HTMLInputElement).value;
    this.min = (min as HTMLInputElement).value;
    this.max = (max as HTMLInputElement).value;
  }

  render() {
    return (
      <Host>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label htmlFor="pageQty">Number of pages</label>
            <input id="pageQty" type="number" value={this.pageQuantity} />
          </div>
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
            <dc-sentance-stack key={+this.key + number} max={this.max} min={this.min}></dc-sentance-stack>
          ))}
        </div>
      </Host>
    );
  }
}
