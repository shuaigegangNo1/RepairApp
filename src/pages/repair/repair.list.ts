import {AfterViewInit, Component} from '@angular/core';
import {AlertController, Events, InfiniteScroll, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UIMessageService} from "../../common/service/ui-message";
import {Observable, Subject} from "rxjs";
import {Repair, RepairCriteria} from "../../common/model/Repair";
import {RepairDetailPage} from "./repair.detail";
import {UserService} from "../../common/service/userService";
import {RepairService} from "../../common/service/repairService";
import {RepairCreatePage} from "./repair.create";

/**
 * Generated class for the RiskCategoryListTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repair-list',
  templateUrl: 'repair.list.html',
})
export class RepairListPage implements AfterViewInit{
  repairList: Array<Repair>;
  repairCriteria:RepairCriteria = new RepairCriteria();
  totalRecords: number;
  lastScroll : InfiniteScroll;
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public events : Events,
              private _messageService: UIMessageService,
              private userService: UserService,
              private repairService: RepairService) {
    if(JSON.parse(localStorage.getItem('sno'))){
      this.repairCriteria.sno = JSON.parse(localStorage.getItem('sno'));
    }
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RiskCategoryListTestPage');
  // }



  ngAfterViewInit() {
    this.getRepairList();

  }

  goToRepairDetail(repair) {
    this.navCtrl.push(RepairDetailPage, {
      repair: repair,
    });
  }
  JumpToCreateRepair() {
    this.navCtrl.push(RepairCreatePage);
  }
  getUserListByRole() {
    this.userService.getUserListByRole(2).subscribe(res=> console.log("res======", JSON.stringify(res)))
  }
  getRepairList() {
    // this.repairCriteria.sno = "666";
    this.repairService.getRepairList(this.repairCriteria).subscribe(res=> {
      this.repairList = res.result.content
      this.totalRecords = res.result.totalElements
    })
  }
  refreshRepairList(){

      // if (this.criteria.page == 1){
      //   if (this.lastScroll)
      //     this.lastScroll.enable(true)
      //   this.valuesForRiskCommonIssueList = res.result
      //   this.totalRecords = res.totalRecords
      // }else{
      //   this.valuesForRiskCommonIssueList = this.valuesForRiskCommonIssueList.concat(res.result)
      // }
    this.lastScroll.enable(true)
    this.repairService.getRepairList(this.repairCriteria).subscribe(res=> {
      this.repairList = this.repairList.concat(res.result.content);
    })

  }
  showMore(infiniteScroll: InfiniteScroll) {
    this.lastScroll = infiniteScroll
    if (this.repairList.length < this.totalRecords){
      this.repairCriteria.skip ++
    this.refreshRepairList();
    }else{
      infiniteScroll.enable(false)
    }
  }
}
