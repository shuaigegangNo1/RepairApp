/**
 * Created by huangxuewen on 2018/1/30.
 */
import {Component} from "@angular/core";
import {NavController, NavParams, Platform} from "ionic-angular";
import {Repair} from "../../common/model/Repair";
import {RepairListPage} from "./repair.list";
import {UIMessageService} from "../../common/service/UIMessage";
import {RepairService} from "../../common/service/repairService";
import {RepairRecordListPage} from "./repair.record.list";

@Component({
  selector:'repair-detail-page',
  templateUrl:'repair.detail.html'
})
export class RepairDetailPage  {
  repair : Repair;


  constructor(protected navCtrl: NavController, protected messageService: UIMessageService,
              protected repairService: RepairService, protected platform: Platform, private navParams: NavParams) {
  }

  ngOnInit() {
    this.repair = this.navParams.get('repair');
  }
  evaluateRepair() {
    if (!this.repair.rate) {
      this.messageService.error('未选择评分等级');
      return;
    }
    this.repair.isEvaluate = 'y';
    this.repairService.update(this.repair).subscribe(res => {
      console.log(">>>res>>", res.result);
      this.messageService.success('评价成功');
      this.navCtrl.push(RepairListPage);
    })
  }
  jumpRepairRecord() {
    this.navCtrl.push(RepairRecordListPage, {
      repairId: this.repair.id,
    });
  }
}
