import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  @Input() tryAnotherQuestion: () => void;
  @Input() prefix: string;
  @Input() n: number;
  constructor() { }

  ngOnInit(): void {
  }

}
