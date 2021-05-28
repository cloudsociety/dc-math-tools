import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'dc-equation-grid',
  styleUrl: 'dc-equation-grid.scss',
  shadow: true,
})
export class DcEquationGrid {
  @Prop() type: string = '+';
  @Prop() max: string = '10';
  @Prop() min: string = '0';
  @Prop() quantity: string = '50';

  render() {
    return (
      <Host>
        <div class="grid">
          {[...Array(+this.quantity).keys()].map(number => (
            <dc-addsub-equation key={number} type={this.type} max={this.max} min={this.min}></dc-addsub-equation>
          ))}
        </div>
        <div class="results">
          <span>Date____________________</span> <span>Time__________minutes</span> <span>Score__________/{this.quantity}</span>
        </div>
      </Host>
    );
  }
}
