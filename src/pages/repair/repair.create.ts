/**
 * Created by huangxuewen on 2018/5/30.
 */
import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {RepairService} from "../../common/service/repairService";
import {Repair} from "../../common/model/Repair";
import {UIMessageService} from "../../common/service/ui-message";
import {RepairListPage} from "./repair.list";
@Component({
    selector: 'repair-create-page',
    templateUrl: 'repair.create.html'
})
export class RepairCreatePage{
    repair: Repair = new Repair();
    sno:string;
    constructor(public nav: NavController, private repairService: RepairService,
                private messageService: UIMessageService) {
        this.sno = localStorage.getItem('sno');
    }
    createRepair() {
        if (!this.repair.content) {
            this.messageService.info('请输入报修内容描述');
            return;
        }
        if (!this.repair.area) {
            this.messageService.info('请选择区域');
            return;
        }
        if (!this.repair.address) {
            this.messageService.info('请输入详细地址');
            return;
        }
        if (!this.repair.telephone) {
            this.messageService.info('请输入联系方式');
            return;
        }
        this.repair.repair_status = 0;
        this.repairService.create(this.sno, this.repair).subscribe(
            res => {
                this.messageService.success('报修申报成功');
                this.nav.push(RepairListPage);
            }
        )
    }

}