import {Component, Input, OnChanges, SimpleChange} from '@angular/core';

interface Test {
  idx: number;
  col: string;
}

@Component({
  selector: 'app-password-strength-bar',
  templateUrl: './password-strength-bar.component.html',
  styleUrls: ['./password-strength-bar.component.scss']
})
export class PasswordStrengthBarComponent implements OnChanges {
  @Input('password')
  passwordToCheck: string;
  bar0: string;
  bar1: string;
  bar2: string;
  bar3: string;
  bar4: string;

  private colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];

  constructor() {
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = this.passwordToCheck;
    this.setBarColors(5, '#DDD');
    if (password) {
      const c = this.getColor(this.measureStrength(password));
      this.setBarColors(c.idx, c.col);
    }
  }

  private measureStrength(pass: string): number {
    let score = 0;
    let letters = {};
    for (let i = 0; i < pass.length; i++) {
      letters[pass[i]] = (letters[pass[i]] || 0) + 1;
      score += 5.0 / letters[pass[i]];
    }

    const variations = {
      digits: /\d/.test(pass),
      lower: /[a-z]/.test(pass),
      upper: /[A-Z]/.test(pass),
      nonWords: /\W/.test(pass),
    };

    let variationCount = 0;

    for (const check in variations) {
      variationCount += (variations[check]) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;
    return Math.trunc(score);
  }

  private getColor(score: number): Test {
    let idx = 0;
    if (score > 90) {
      idx = 4;
    } else if (score > 70) {
      idx = 3;
    } else if (score >= 40) {
      idx = 2;
    } else if (score >= 20) {
      idx = 1;
    }
    return {
      idx: idx + 1,
      col: this.colors[idx]
    };
  }

  private setBarColors(count, col): void {
    // tslint:disable-next-line:variable-name
    for (let _n = 0; _n < count; _n++) {
      this['bar' + _n] = col;
    }
  }
}
