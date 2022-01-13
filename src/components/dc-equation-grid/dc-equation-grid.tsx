import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'dc-equation-grid',
  styleUrl: 'dc-equation-grid.scss',
  shadow: true,
})
export class DcEquationGrid {
  @Prop() type: string = '+';
  @Prop() topMax: string = '10';
  @Prop() topMin: string = '0';
  @Prop() bottomMax: string = '10';
  @Prop() bottomMin: string = '0';
  @Prop() quantity: string = '50';

  render() {
    return (
      <Host>
        <div class="grid">
          {[...Array(+this.quantity).keys()].map(number => (
            <dc-addsub-equation key={number} type={this.type} topMax={this.topMax} topMin={this.topMin} bottomMax={this.bottomMax} bottomMin={this.bottomMin}></dc-addsub-equation>
          ))}
        </div>
        <div class="results">
          <span>Date____________________</span> <span>Time__________minutes</span> <span>Score__________/{this.quantity}</span>
        </div>
      </Host>
    );
  }
}
