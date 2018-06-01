import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {loginPage} from "../login/login";
import {UserService} from "../../common/service/userService";
import {User} from "../../common/model/User";
import {AboutUpdatePage} from "./about.update";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  sno:string;
  user: User = new User();
  constructor(public navCtrl: NavController,private userService: UserService) {
    this.sno = localStorage.getItem('sno');
    this.getUserDetail();
  }
  getUserDetail() {
    this.userService.getUserbySno(this.sno).subscribe(res => this.user = res.result)
  }
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('sno');
    this.navCtrl.push(loginPage)
  }
  jumpToUpdateUser() {
    this.navCtrl.push(AboutUpdatePage,{user: this.user})
  }
}
