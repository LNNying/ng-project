import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Item} from '../../interface/Item';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {


  item: Item[];

  @Output()
  clickEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.item = [
      {
        id: 1,
        label: 'JAVA',
        value: 'java',
        desc: 'This is a book about of Java',
        active: true,
      },
      {
        id: 2,
        label: 'PHP',
        value: 'php',
        desc: 'This is a book about of PHP',
        active: false,
      },
      {
        id: 3,
        label: 'VUE',
        value: 'vue',
        desc: 'This is a book about of VUE',
        active: false,
      },
      {
        id: 4,
        label: 'BootStrap',
        value: 'bootstrap',
        desc: 'This is a book about of Bootstrap',
        active: false,
      },
      {
        id: 5,
        label: 'Angular JS',
        value: 'angularJs',
        desc: 'This is a book about of Angular JS',
        active: false,
      }
    ];
  }
  // 点击栏目种类
  itemClick(value) {
    const id = value.id;
    const type: string = value.value;
    for (const item of this.item) {
      if (id === item.id) {
        item.active = true;
      } else {
        item.active = false;
      }
    }
    this.clickEvent.emit(type);
  }
}
