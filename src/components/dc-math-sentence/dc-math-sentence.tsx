import { Component, Host, h, Prop } from '@stencil/core';
import { getRandomInt } from '../../utils/getRandomInt';

@Component({
  tag: 'dc-math-sentence',
  styleUrl: 'dc-math-sentence.css',
  shadow: true,
})
export class DcMathSentence {
  @Prop() max: string = '99999';
  @Prop() min: string = '1000';

  number = getRandomInt(+this.min, +this.max);
  displayWhich = getRandomInt(0, 3);

  convertToExtended(number: number): string {
    return String(+number)
      .split('')
      .map((digit, index, arr) => `${digit}0000000`.slice(0, arr.length - index))
      .filter(digit => Boolean(+digit))
      .join(' + ');
  }

  convertToWords(number: number): string {
    let oneToTwenty = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let placeNames = ['million', 'hundred', 'thousand', 'hundred', ''];

    function getNumber(num) {
      return oneToTwenty[Number(num)] || `${tens[num[0]]}${oneToTwenty[num[1]] && ` ${oneToTwenty[num[1]]}`}`;
    }

    let num = ('0000000' + number).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    if (!num) return;

    let output = num.slice(1).map((place, index, arr) => {
      if (+place == 0) return '';
      const hundredThousand = index === 1 && +arr[2] == 0 ? ` ${placeNames[index + 1]}` : '';

      return `${getNumber(place)}${placeNames[index] && ` ${placeNames[index]}${hundredThousand}`}`;
    });

    return output.filter(Boolean).join(' ');
  }

  numberSet = [
    { name: 'Standard', value: this.number },
    { name: 'Expanded', value: this.convertToExtended(this.number) },
    { name: 'Word', value: this.convertToWords(this.number) },
  ];

  render() {
    return (
      <Host>
        <dl>
          {this.numberSet.map((line, index) => (
            <div>
              <dt>{line.name} Form</dt>
              <dd>
                <span hidden={index !== this.displayWhich}>{line.value}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Host>
    );
  }
}
