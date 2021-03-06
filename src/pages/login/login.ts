/**
 * Created by huangxuewen on 2018/1/25.
 */
import {Component} from "@angular/core";
import {AlertController, NavController} from "ionic-angular";
import { TabsPage } from '../tabs/tabs';
import {AuthService} from "../../common/service/AuthService";
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class loginPage{
  user = { name: '', password: '' };
  constructor(public nav: NavController, public auth: AuthService, public alertCtrl: AlertController) { }
  public login() {
    if(this.user.name===''||this.user.password===''){
      this.showError("未输入工号/学号或密码");
      return;
    }
    this.auth.login(this.user).subscribe(allowed => {
        if (allowed) {
          this.nav.push(TabsPage);
        } else {
          this.showError("工号/学号或密码不正确");
        }
      },
      error => {
        if (error.status==401){
          this.showError("工号/学号或密码不正确");
        }else{
          this.showError("网络未连接");
        }
      });
  }

  // showLoading() {
  //   this.loading = this.loadingCtrl.create({
  //     content: '正在连接中...',
  //     dismissOnPageChange: true
  //   });
  //   this.loading.present();
  // }

  showError(text) {
    let alert = this.alertCtrl.create({
      title: text,
      buttons: ['确认']
    });
    alert.present();
  }
}
