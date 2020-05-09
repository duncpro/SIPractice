import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {

  @Input() A;
  @Input() n;
  @Input() unit;
  @Input() onUserResponse: (response: string) => void;

  userAnswer: string;

  ngOnInit(): void {
  }

  onKey(input: string): void {
    this.userAnswer = input;
  }

  onDone(): void {
    console.log('clicked');
    this.onUserResponse(this.userAnswer);
  }
}
