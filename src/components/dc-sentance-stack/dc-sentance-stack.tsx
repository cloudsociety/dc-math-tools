import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'dc-sentance-stack',
  styleUrl: 'dc-sentance-stack.scss',
  shadow: true,
})
export class DcSentanceStack {
  @Prop() max: string = '10';
  @Prop() min: string = '0';
  @Prop() quantity: string = '6';

  render() {
    return (
      <Host>
        <div class="grid">
          {[...Array(+this.quantity).keys()].map(number => (
            <dc-math-sentence key={number} max={this.max} min={this.min}></dc-math-sentence>
          ))}
        </div>
        <div class="results">
          <span>Date____________________</span> <span>Time__________minutes</span> <span>Score__________/{this.quantity}</span>
        </div>
      </Host>
    );
  }
}
