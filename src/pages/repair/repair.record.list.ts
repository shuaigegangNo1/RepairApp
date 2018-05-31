import {AfterViewInit, Component} from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {UIMessageService} from "../../common/service/ui-message";
import {RepairRecord, RepairRecordCriteria} from "../../common/model/RepairRecord";
import {RepairRecordService} from "../../common/service/repairRecordService";

@Component({
  selector: 'page-repair-record-list',
  templateUrl: 'repair.record.list.html',
})
export class RepairRecordListPage implements AfterViewInit{
  repairRecordList: Array<RepairRecord>;
  repairRecordCriteria: RepairRecordCriteria = new RepairRecordCriteria();
  show: boolean;
  constructor(public navCtrl: NavController,
              public events : Events,
              private repairRecordService: RepairRecordService,
              private navParams: NavParams) {
      this.repairRecordCriteria.id = this.navParams.get('repairId');
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RiskCategoryListTestPage');
  // }



  ngAfterViewInit() {
    this.getRepairRecordList();

  }

  getRepairRecordList() {
    this.repairRecordService.getRepairRecordList(this.repairRecordCriteria)
        .subscribe(res => {
          this.repairRecordList = res.result.content;
          if (this.repairRecordList.length === 0) {
            this.show = true;
          }
        } )
  }
}
