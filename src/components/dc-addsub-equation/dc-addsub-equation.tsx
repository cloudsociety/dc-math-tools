import { Component, Host, h, Prop } from '@stencil/core';
import { getRandomInt, getRandomEpochTime, convertToHours } from '../../utils/getRandomInt';

@Component({
  tag: 'dc-addsub-equation',
  styleUrl: 'dc-addsub-equation.scss',
  shadow: true,
})
export class DcAddsubEquation {
  @Prop() type: string = '+';
  @Prop() topMax: string = '10';
  @Prop() topMin: string = '0';
  @Prop() bottomMax: string = '10';
  @Prop() bottomMin: string = '0';
  @Prop() isTime: boolean = false;

  operator: string;
  numbers = this.getNumbers();

  getNumbers() {
    if (this.isTime) {
      return [getRandomEpochTime(), getRandomEpochTime()];
    }
    // add some other stuff for time-based math here
    return [getRandomInt(+this.topMin, +this.topMax), getRandomInt(+this.bottomMin, +this.bottomMax)];
  }

  sortNumbers(a: number, b: number) {
    if (a < 10000 && b < 10000) {
      return b - a;
    }

    // Assume the big numbers are epoch times
    const aParts = convertToHours(a).split(/[: ]+/g);
    const bParts = convertToHours(b).split(/[: ]+/g);

    if (aParts.at(-1) !== bParts.at(-1)) {
      return aParts.at(-1) < bParts.at(-1) ? 1 : -1;
    }

    return +`${bParts.at(0)}${bParts.at(1)}` - +`${aParts.at(0)}${aParts.at(1)}`;
  }

  connectedCallback() {
    const operator = this.type.charAt(Math.floor(Math.random() * this.type.length));
    switch (operator) {
      case '-':
        this.operator = '-';
        this.numbers = this.numbers.sort(this.sortNumbers);
        break;
      case '*':
        this.operator = '×';
        break;
      case '/':
        this.operator = '÷';
        this.numbers = [this.numbers[0] * this.numbers[1], this.numbers[1]].sort(this.sortNumbers);
        break;
      default:
        this.operator = '+';
    }
  }

  render() {
    return (
      <Host>
        <div>{this.isTime ? <Time time={convertToHours(this.numbers[0])} /> : this.numbers[0]}</div>
        <div>
          {this.operator} {this.isTime ? <Time time={convertToHours(this.numbers[1])} /> : this.numbers[1]}
        </div>
        <hr />
      </Host>
    );
  }
}

const Time = props => {
  console.log(props);

  const parts = props.time.split(/[: ]/g);
  return (
    <span>
      <span>{parts[0]}</span>:<span>{parts[1].split('').map((char, i) => (i === 0 ? <i>{char}</i> : char))}</span> <span>{parts[2]}</span>
    </span>
  );
};
