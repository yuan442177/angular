import {CanActivate} from "@angular/router";

export class LoginGuard implements CanActivate {
  canActivate(){
    let n = Math.random()
    let loggedIn: boolean = n <0.5;
    console.log(n)
    if(!loggedIn){
      console.log("用户未登录")
    }else{
      console.log("用户登录成功")
      return loggedIn;
    }
  }
}
