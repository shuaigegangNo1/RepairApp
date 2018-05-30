/**
 * Created by huangxuewen on 2018/1/30.
 */
import {Component} from "@angular/core";
import {NavController, AlertController, NavParams, Platform} from "ionic-angular";
import {Network} from "@ionic-native/network";
import {Repair} from "../../common/model/Repair";

@Component({
  selector:'repair-detail-page',
  templateUrl:'repair.detail.html'
})
export class RepairDetailPage  {
  repair : Repair;


  constructor(protected navCtrl: NavController, protected alertCtrl: AlertController,
              protected network: Network, protected platform: Platform, private navParams: NavParams) {
  }

  ngOnInit() {
    this.repair = this.navParams.get('repair');
  }

}
