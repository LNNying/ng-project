import { Component, OnInit } from '@angular/core';
import {Student} from '../interface/Student';
import {MathService} from '../service/MathService';
// 引入jQuery
import * as $ from 'jquery';
// ng g c 组件名
// ng serve 启动
/**
 * src="{{变量}}"
 * [src]="属性"
 * (click)="事件"
 * 接口必须写在开头
 * 双向绑定 [value]="变量" 获取值
 * (input)="变量=$event.target.value"
 * 指令 *ngif *ngFor
 * 父子组件传值
 *   子组件 <app-card [name]="name"></app-card> @Input() name: string @Input与vue中props相似
 *   [style.color]="方法返回颜色 "
 *   service 注解 @Injectable()
 *   安装jQuery和bootstrap的类型描述文件 npm install @types/jquery --save-dev
 *   npm install @types/jquery --save-dev
 *   安装jQuery npm install jquery --save np, install bootstrap --save
 */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers 把服务租入进来
  providers: [MathService]
})

export class HomeComponent  {
  // 声明变量
  title: number;
  name: string;
  // @ts-ignore
  students: Student[];
  outSoonMsg: string;
  // 相当于vue声明周期
  // 服务 在构造器中也要加入 必须加上private
  constructor(private ms: MathService) {
    this.title = 0;
    this.name = this.ms.get('2');
    this.students = [{name: '小明', age: 12}, {name: '小花', age: 12}];
  }
  onclickBtn() {
    this.title += 1;
    this.ms.get('32');
  }
  receive(event) {
    console.log(event);
    this.outSoonMsg = event;
  }
  test() {
    $('.ccc').hide();
  }
}
