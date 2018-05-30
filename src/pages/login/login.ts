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
  // name: string;
  // passWord: string;
  // constructor(public navCtrl: NavController, public alertCtrl: AlertController){
  // }
  // login(){
  //   this.navCtrl.push(TabsPage,{loginFlag: true});
  //   /*    if(this.name ==='admin' && this.passWord === '123'){
  //    this.navCtrl.push(IndexComponent,{loginFlag: true});
  //    }else{
  //    let alert = this.alertCtrl.create(
  //    {
  //    title: '登录失败',
  //    subTitle: '用户名和密码不一致',
  //    buttons: ['确认']
  //    });
  //    alert.present();
  //    }*/
  // }
  user = { name: '', password: '' };

  constructor(public nav: NavController, public auth: AuthService, public alertCtrl: AlertController) { }

  public login() {
    this.auth.login(this.user).subscribe(allowed => {
        if (allowed) {
          this.nav.push(TabsPage);
        } else {
          this.showError("用户名/密码不正确");
        }
      },
      error => {
        if (error.status==401){
          this.showError("用户名/密码不正确");
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
    alert.present(prompt);
  }
}
