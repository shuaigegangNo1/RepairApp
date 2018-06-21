import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class UIMessageService {

  constructor(
    public toastCtrl: ToastController
  ) {
  }

  info(message: string): void{
    this.toastCtrl.create({
      message: "提示: "+message,
      duration: 2000,
      position: 'middle'
    }).present()
  }

  success(message : string): void {
    this.toastCtrl.create({
      message: "成功: " + message,
      duration: 2000,
      position: 'middle'
    }).present()
  }

  error(message : string): void {
    this.toastCtrl.create({
      message: "错误: " + message,
      duration: 2500,
      position: 'middle'
    }).present()
  }


}
