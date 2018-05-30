/**
 * Created by huangxuewen on 2018/1/30.
 */
import {Component} from "@angular/core";
import {NavController, AlertController, NavParams, Platform} from "ionic-angular";
import {Network} from "@ionic-native/network";

@Component({
  selector:'repair-detail-page',
  templateUrl:'repair.detail.html'
})
export class RepairDetailPage  {
  repair : any;


  constructor(protected navCtrl: NavController, protected alertCtrl: AlertController,
              protected network: Network, protected platform: Platform, private navParams: NavParams) {
  }

  ngOnInit() {
    this.repair = this.navParams.get('repair');
  }

  getTaskInfo() {

  }
}
