import { Component } from '@angular/core';

@Component({//装饰器 里面的属性叫做元数据  组件元数据装饰器
  selector: 'app-root',//声明可以通过<app-root>标签调用
  templateUrl: './app.component.html',//声明模板
  styleUrls: ['./app.component.css']//样式
})
export class AppComponent {//控制器
  title = 'Hello World!';
} 
