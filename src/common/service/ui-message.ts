import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { UIMessage, UIMessageType } from '../model/ui-message'
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class UIMessageService {

  //private messageStream = new Subject<string>();
  constructor(
    public toastCtrl: ToastController
  ) {
  }

  info(message: string): void{
    this.toastCtrl.create({
      message: message,
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
