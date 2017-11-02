import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component"
import {ProductComponent} from "./product/product.component"
import {Code404Component} from "./code404/code404.component"
import {ProductDescComponent} from "./product-desc/product-desc.component"
import {SellerInfoComponent} from "./seller-info/seller-info.component"

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,children:[
    {path:'',component:ProductDescComponent},
    {path:'seller/:id',component:SellerInfoComponent}
  ]},
  {path:'product',component:ProductComponent,
  children:[
    {path:'',component:ProductDescComponent},
    {path:'seller/:id',component:SellerInfoComponent}
  ]},//查询方式传参
  {path:'product/:id',component:ProductComponent,
    children:[
      {path:'',component:ProductDescComponent},
      {path:'seller/:id',component:SellerInfoComponent}
    ]},//url方式传参
  {path:'**',component:Code404Component}//通配符路由一定要放到后面
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
