import {Component, OnInit} from '@angular/core';

const USER_ANSWERED_INCORRECTLY = 1;
const USER_ANSWERED_CORRECTLY = 2;
const WAITING_ON_USER_TO_ANSWER = 3;
const READY_TO_RESTART = 4;

const ALL_N_VALUES = Object.freeze([
  12, 9, 6, 3, -1, -2, -3, -6, -9
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  A: number;
  n: number;
  unit: string;
  mode: number = WAITING_ON_USER_TO_ANSWER;
  lastUserAnswer: string;
  potentialNValues = [
    12, 9, 6, 3, -1, -2, -3, -6, -9
  ];
  showCorrectScreen() { return this.mode === USER_ANSWERED_CORRECTLY; }
  showWrongScreen() { return this.mode === USER_ANSWERED_INCORRECTLY; }
  showPrompt() { return this.mode === WAITING_ON_USER_TO_ANSWER; }
  readyToRestart() { return this.mode === READY_TO_RESTART; }
  restart() {
    this.potentialNValues = Array.from(ALL_N_VALUES);
    this.setRandomValues();
  }
  ngOnInit(): void {
    this.setRandomValues();
  }

  setRandomValues(): void {
    this.setRandomUnit();
    this.A = Math.random() * 10;
    this.setRandomNValue();
    this.mode = WAITING_ON_USER_TO_ANSWER;
  }

  private setRandomNValue(): void {
    this.n = this.potentialNValues[Math.floor(Math.random() * this.potentialNValues.length)];
  }

  private setRandomUnit(): void {
    const random = Math.floor(Math.random() * 6);

    if (random === 0) {
      this.unit = 'g';
    }
    if (random === 1) {
      this.unit = 'W';
    }
    if (random === 2) {
      this.unit = 'Hz';
    }
    if (random === 3) {
      this.unit = 'm';
    }
    if (random === 4) {
      this.unit = 'L';
    }
    if (random === 5) {
      this.unit = 's';
    }
  }

  getCorrectPrefix(): string {
    if (this.n === 12) { return 'tera'; }
    if (this.n === 9) { return 'giga'; }
    if (this.n === 6) { return 'mega'; }
    if (this.n === 3) { return 'kilo'; }
    if (this.n === -1) { return 'deci'; }
    if (this.n === -2) { return 'centi'; }
    if (this.n === -3) { return 'milli'; }
    if (this.n === -6) { return 'micro'; }
    if (this.n === -9) { return 'nano'; }
    if (this.n === -12) { return 'pico'; }

    throw new Error();
  }

  private shouldPluralize(): boolean {
    if (this.getLongFormUnitName() === 'hertz') { return false; }
    return this.A !== 1;
  }

   private getAbbreviatedPrefix(): string {
    if (this.n === 12) { return 'T'; }
    if (this.n === 9) { return 'G'; }
    if (this.n === 6) { return 'M'; }
    if (this.n === 3) { return 'k'; }
    if (this.n === -1) { return 'd'; }
    if (this.n === -2) { return 'c'; }
    if (this.n === -3) { return 'm'; }
    if (this.n === -6) { return '\u03BC'; }
    if (this.n === -9) { return 'n'; }
    if (this.n === -12) { return 'p'; }
  }

  private getLongFormUnitName(): string {
    if (this.unit === 'g') { return 'gram'; }
    if (this.unit === 'W') { return 'watt'; }
    if (this.unit === 'Hz') { return 'hertz'; }
    if (this.unit === 'L') { return 'liter'; }
    if (this.unit === 's') { return 'second'; }
    if (this.unit === 'm') { return 'meter'; }
    throw new Error();
  }

  getCorrectAnswers(): Array<string> {
    let longform = `${this.A.toFixed(3)} ${this.getCorrectPrefix()}${this.getLongFormUnitName()}`;
    if (this.shouldPluralize()) {
      longform += 's';
    }

    const shorthand = `${this.A.toFixed(3)} ${this.getAbbreviatedPrefix()}${this.unit}`;
    return [longform, shorthand];
  }

  onUserResponse(response: string): void {
    this.lastUserAnswer = response;
    const correct = this.getCorrectAnswers().includes(response);
    if (correct) {
      this.potentialNValues
        = this.potentialNValues.filter(n1 => n1 !== this.n);
      if (this.potentialNValues.length > 0) {
        this.mode = USER_ANSWERED_CORRECTLY;
      } else {
        this.mode = READY_TO_RESTART;
      }
    } else {
      this.mode = USER_ANSWERED_INCORRECTLY;
    }
    console.log('User answered: ' + response);
  }
}
