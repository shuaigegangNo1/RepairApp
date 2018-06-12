/**
 * Created by huangxuewen on 2018/5/30.
 */
import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {RepairService} from "../../common/service/repairService";
import {Repair} from "../../common/model/Repair";
import {UIMessageService} from "../../common/service/ui-message";
import {RepairListPage} from "./repair.list";
import {DomSanitizer} from "@angular/platform-browser";
import {FileService} from "../../common/service/fileService";
@Component({
    selector: 'repair-create-page',
    templateUrl: 'repair.create.html'
})
export class RepairCreatePage{
    repair: Repair = new Repair();
    sno: string;
    imageUrl: any;
    currFile: File;
    files: Array<File>;
    constructor(public nav: NavController, private repairService: RepairService,
                private messageService: UIMessageService, private sanitizer: DomSanitizer,
                private fileService: FileService) {
        this.sno = localStorage.getItem('sno');
    }
    createRepair() {
        this.repair.repair_status = 0;
        this.repairService.create(this.sno, this.repair).subscribe(
            res => {
                this.messageService.success('报修申报成功');
                this.nav.push(RepairListPage);
            }
        )
    }
    selectedFileOnChanged(event:any) {
        this.currFile = event.currentTarget.files[0];
        this.files = event.target.files;
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.currFile));
        this.files = event.target.files;
    }

    uploadImage() {
        this.fileService.handlerFileUpload(this.files).then(
            res => {
                // TODO this is ugly
                // this.course.equipment = res.filenames[0] ? res.filenames[0] : "";
                // this.course.equipment = res.filenames[1] ? res.filenames[1] : "";
            }
        ).then(() => {
                console.log(">>>>Upload Image Success>>>>>>")
                // this.createAttachment();
            }
        );
    }
}