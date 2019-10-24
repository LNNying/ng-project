import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

import {Content} from '../../interface/Content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {

  constructor() { }

  content: Content[];
  allContent: Content[];
  @Input()
  contentType: string;

  ngOnInit() {
    this.allContent =  [
      {
        id: 1,
        title: 'Java入门之道',
        url: '#',
        content: 'Java介于编译型语言和解释型语言之间。编译型语言如C、C++，代码是直接编译成机器码执行，但是不同的平台（x86、ARM等）CPU的指令集不同，' +
          '因此，需要编译出每一种平台的对应机器码。解释型语言如Python、Ruby没有这个问题，可以由解释器直接加载源码然后运行，代价是运行效率太低。' +
          '而Java是将代码编译成一种“字节码”，它类似于抽象的CPU指令，然后，针对不同平台编写虚拟机，不同平台的虚拟机负责加载字节码并执行，' +
          '这样就实现了“一次编写，到处运行”的效果。当然，这是针对Java开发者而言。对于虚拟机，需要为每个平台分别开发。',
        type: 'java',
        starNum: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o', 'fa fa-star-o']
      },
      {
        id: 2,
        title: 'Java从入门到精通',
        url: '#',
        content: 'Java最早是由SUN公司（已被Oracle收购）的詹姆斯·高斯林（高司令，人称Java之父）在上个世纪90年代初开发的一种编程语言，最初被命名为Oak，' +
          '目标是针对小型家电设备的嵌入式应用，结果市场没啥反响。谁料到互联网的崛起，让Oak重新焕发了生机，于是SUN公司改造了Oak，在1995年以Java的名称正式发布，' +
          '原因是Oak已经被人注册了，因此SUN注册了Java这个商标。随着互联网的高速发展，Java逐渐成为最重要的网络编程语言。',
        type: 'java',
        starNum: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o', 'fa fa-star-o']
      },
      {
        id: 3,
        title: 'SpringBoot简介',
        url: '#',
        content: 'Spring Boot 2.0 的推出又激起了一阵学习 Spring Boot 热，就单从我个人的博客的访问量大幅增加就可以感受到大家对学习 Spring Boot 的热情，' +
          '那么在这么多人热衷于学习 Spring Boot 之时，我们自己也在思考： Spring Boot 为什么带来了这么大的变革。它诞生的背景是什么？' +
          'Spring 企业又是基于什么样的考虑创建的 Spring Boot? 传统企业使用 Spring Boot 会给我们带来什么样变化。',
        type: 'java',
        starNum: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o', 'fa fa-star-o']
      },
      {
        id: 4,
        title: 'SpringBoot从入门到精通',
        url: '#',
        content: 'Spring 框架可以说是 Java 开发人员使用的最流行的应用程序开发框架之一。它目前由大量提供一系列服务的模块组成。包括模块容器，' +
          '为构建横切关注点提供支持的面向切面编程（AOP），安全框架，数据存取框架，Web 应用框架和用于模块测试提供支持的类。Spring 框架的所有组件都通过依赖注入粘在一起。' +
          '依赖注入（也称为控制反转）使设计和测试松散耦合的软件模块变得更容易。',
        type: 'java',
        starNum: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o', 'fa fa-star-o']
      }
    ];
    this.content = [
      {
        id: 1,
        title: 'Java入门之道',
        url: '#',
        content: 'Java介于编译型语言和解释型语言之间。编译型语言如C、C++，代码是直接编译成机器码执行，但是不同的平台（x86、ARM等）CPU的指令集不同，' +
          '因此，需要编译出每一种平台的对应机器码。解释型语言如Python、Ruby没有这个问题，可以由解释器直接加载源码然后运行，代价是运行效率太低。' +
          '而Java是将代码编译成一种“字节码”，它类似于抽象的CPU指令，然后，针对不同平台编写虚拟机，不同平台的虚拟机负责加载字节码并执行，' +
          '这样就实现了“一次编写，到处运行”的效果。当然，这是针对Java开发者而言。对于虚拟机，需要为每个平台分别开发。',
        type: 'java',
        starNum: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o', 'fa fa-star-o']
      },
      {
        id: 2,
        title: 'Java从入门到精通',
        url: '#',
        content: 'Java最早是由SUN公司（已被Oracle收购）的詹姆斯·高斯林（高司令，人称Java之父）在上个世纪90年代初开发的一种编程语言，最初被命名为Oak，' +
          '目标是针对小型家电设备的嵌入式应用，结果市场没啥反响。谁料到互联网的崛起，让Oak重新焕发了生机，于是SUN公司改造了Oak，在1995年以Java的名称正式发布，' +
          '原因是Oak已经被人注册了，因此SUN注册了Java这个商标。随着互联网的高速发展，Java逐渐成为最重要的网络编程语言。',
        type: 'java',
        starNum: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o', 'fa fa-star-o']
      },
      {
        id: 3,
        title: 'SpringBoot简介',
        url: '#',
        content: 'Spring Boot 2.0 的推出又激起了一阵学习 Spring Boot 热，就单从我个人的博客的访问量大幅增加就可以感受到大家对学习 Spring Boot 的热情，' +
          '那么在这么多人热衷于学习 Spring Boot 之时，我们自己也在思考： Spring Boot 为什么带来了这么大的变革。它诞生的背景是什么？' +
          'Spring 企业又是基于什么样的考虑创建的 Spring Boot? 传统企业使用 Spring Boot 会给我们带来什么样变化。',
        type: 'java',
        starNum: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o', 'fa fa-star-o']
      },
      {
        id: 4,
        title: 'SpringBoot从入门到精通',
        url: '#',
        content: 'Spring 框架可以说是 Java 开发人员使用的最流行的应用程序开发框架之一。它目前由大量提供一系列服务的模块组成。包括模块容器，' +
          '为构建横切关注点提供支持的面向切面编程（AOP），安全框架，数据存取框架，Web 应用框架和用于模块测试提供支持的类。Spring 框架的所有组件都通过依赖注入粘在一起。' +
          '依赖注入（也称为控制反转）使设计和测试松散耦合的软件模块变得更容易。',
        type: 'java',
        starNum: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o', 'fa fa-star-o']
      }
    ];
  }

  starClick(data, value) {
    const id = data.id;
    const type = value;
    for (let i = 0; i <= this.content.length; i++) {
      if (this.content[i].id === id) {
       const faStar = this.content[i].starNum.filter(item => {
          if (item === 'fa fa-star') {
              return true;
          }
        });
       const faStarO = this.content[i].starNum.filter(item => {
          if (item === 'fa fa-star-o') {
            return true;
          }
        });
       if (type === 'fa fa-star') {
          if (faStar.length !== 0) {
            faStar[faStar.length - 1] = 'fa fa-star-o';
          }
        } else {
          if (faStarO.length !== 0) {
            faStarO[0] = 'fa fa-star';
          }
        }
       const starNumList = faStar.concat(faStarO);
       this.content[i].starNum = starNumList;
       return;
      }
    }
  }

  changeContent() {
   this.content = [];
   this.content = this.allContent.filter(item => {
     if (item.type === this.contentType) {
       return true;
     }
   });
  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes.contentType.currentValue !== '') {
      console.log(changes);
      this.changeContent();
    }
  }
}
