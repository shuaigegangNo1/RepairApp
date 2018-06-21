import {AfterViewInit, Component} from '@angular/core';
import {InfiniteScroll, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Repair, RepairCriteria} from "../../common/model/Repair";
import {RepairDetailPage} from "./repair.detail";
import {RepairService} from "../../common/service/repairService";
import {RepairCreatePage} from "./repair.create";

@IonicPage()
@Component({
  selector: 'page-repair-list',
  templateUrl: 'repair.list.html',
})
export class RepairListPage implements AfterViewInit{
  repairList: Array<Repair>;
  repairCriteria: RepairCriteria = new RepairCriteria();
  totalRecords: number;
  lastScroll : InfiniteScroll;
  show: boolean;
  constructor(public navCtrl: NavController,
              private repairService: RepairService,
              private navParams: NavParams) {
      this.repairCriteria.sno = localStorage.getItem('sno');
      if(navParams.data){
        this.repairCriteria.isEvaluate = navParams.data.isEvaluate;
        if(this.repairCriteria.isEvaluate === 'y'){
          this.show = false;
        }else {
          this.show = true;
        }
      }
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RiskCategoryListTestPage');
  // }



  ngAfterViewInit() {
    this.getRepairList();
    this.getCount();
  }
  getCount() {
    console.log(">>>>enter>>>>> getCount")
    this.repairService.messages$.subscribe(count=> console.log(">>>res>>666669999", count))
  }
  goToRepairDetail(repair) {
    this.navCtrl.push(RepairDetailPage, {
      repair: repair,
    });
  }
  JumpToCreateRepair() {
    this.navCtrl.push(RepairCreatePage);
  }
  search() {
    this.getRepairList();
  }
  getRepairList() {
    this.repairService.getRepairList(this.repairCriteria).subscribe(res=> {
      this.repairList = res.result.content
      this.totalRecords = res.result.totalElements
    })
  }
  refreshRepairList(){
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
  setColor(repair: Repair): string {
    let color = '';
    if (repair.repair_status === 0) {
      color = 'red'
    }else if (repair.repair_status === 2) {
      color = 'green'
    }else if (repair.repair_status === 3 && repair.isEvaluate === 'n') {
      color = 'blue'
    }else if (repair.repair_status === 4 && repair.isEvaluate === 'n') {
      color = 'blue'
    }else {
      color = 'black'
    }
    return color;
  }
}
