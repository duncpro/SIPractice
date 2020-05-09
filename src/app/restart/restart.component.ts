import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-restart',
  templateUrl: './restart.component.html',
  styleUrls: ['./restart.component.css']
})
export class RestartComponent implements OnInit {
  @Input() restart: () => void;

  constructor() { }

  ngOnInit(): void {
  }

}
