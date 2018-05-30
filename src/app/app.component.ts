import { Component } from '@angular/core';
import {AlertController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

import { TabsPage } from '../pages/tabs/tabs';
import {loginPage} from '../pages/login/login';
import {UIMessageService} from "../common/service/ui-message";

@Component({
  templateUrl: 'app.html'
})
export class WindbellApp {
  rootPage:any = loginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public alertCtrl: AlertController,
              protected network: Network,
              private messageService: UIMessageService) {
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

    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });
  }
}
