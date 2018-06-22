import { Component } from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

import {loginPage} from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class WindbellApp {
  rootPage:any = loginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public alertCtrl: AlertController,
              protected network: Network) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // this.checkNetWork();
    });
  }

  checkNetWork() {
    this.network.onDisconnect().subscribe(() => {
      let alert = this.alertCtrl.create(
        {
          title: '网络异常',
          subTitle: '检查网络设置',
          buttons: ['确认']
        });
      alert.present();
    });
  }
}
