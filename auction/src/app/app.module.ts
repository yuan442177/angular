import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [//声明模块中有什么东西 组件,指令,管道
    AppComponent
  ],
  imports: [//声明模块所需的其他模块
    BrowserModule
  ],
  providers: [],//声明服务
  bootstrap: [AppComponent]//声明模块的主组件是什么
})
export class AppModule { }
