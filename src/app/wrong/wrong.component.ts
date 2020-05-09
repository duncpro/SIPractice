import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wrong',
  templateUrl: './wrong.component.html',
  styleUrls: ['./wrong.component.css']
})
export class WrongComponent implements OnInit {
  @Input() correctAnswers: Array<string>;
  @Input() tryAgain: () => void;
  @Input() userAnswer: string;
  @Input() prefix: string;
  @Input() n: number;
  constructor() { }

  ngOnInit(): void {
  }

}
