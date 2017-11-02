import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId:number
  private productId2:number

  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    
    //snapshot参数快照
    this.productId = this.routeInfo.snapshot.queryParams["id"]//查询方式传参
    //this.productId2 = this.routeInfo.snapshot.params["id"]//url方式
    //参数订阅
    this.routeInfo.params.subscribe((params:Params) => this.productId2 = params["id"]);
  }

}
