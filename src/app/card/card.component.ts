import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  name: string;
  // 子传父 1
  @Output()
  soonOutput: EventEmitter<string[]> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  upload() {
    const msg: string[] = ['1', '1'];
    this.soonOutput.emit(msg);
  }
}
