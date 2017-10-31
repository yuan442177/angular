import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  private rating:number = 0;
  @Input()
  private categories:string[];

  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for(let i = 1;i<=5;i++){
      this.stars.push(i>this.rating)
      console.log(this.stars)
    }
  }

}
