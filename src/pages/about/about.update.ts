import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {UserService} from "../../common/service/userService";
import {User} from "../../common/model/User";
import {UIMessageService} from "../../common/service/ui-message";
import {AboutPage} from "./about";

@Component({
  selector: 'page-about-update',
  templateUrl: 'about.update.html'
})
export class AboutUpdatePage {
  sno:string;
  user: User = new User();
  constructor(public navCtrl: NavController,private userService: UserService,
              private navParams: NavParams, private messageService: UIMessageService) {
    this.user = this.navParams.get('user');
  }
  public updateUser() {
    if(!this.user.email){
      this.messageService.error('请输入联系方式');
    }
    this.userService.update(this.user).subscribe(
        res=>{
          this.messageService.success('联系方式更新成功');
          this.navCtrl.push(AboutPage);
        }
    )
  }
}
