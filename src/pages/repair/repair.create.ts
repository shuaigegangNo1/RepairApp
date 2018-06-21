/**
 * Created by huangxuewen on 2018/5/30.
 */
import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {RepairService} from "../../common/service/repairService";
import {Repair} from "../../common/model/Repair";
import {UIMessageService} from "../../common/service/UIMessage";
import {RepairListPage} from "./repair.list";
import {DomSanitizer} from "@angular/platform-browser";
import {FileService} from "../../common/service/fileService";
import {FILE_PATH, IMAGE_SIZE} from "../../common/constants";
import {Attachment} from "../../common/model/Attachment";
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
    count: number;
    attachment: Attachment = new Attachment();
    constructor(public nav: NavController, private repairService: RepairService,
                private messageService: UIMessageService, private sanitizer: DomSanitizer,
                private fileService: FileService) {
        this.sno = localStorage.getItem('sno');
        this.imageUrl = "assets/imgs/default.jpeg"
        this.initCount();
    }
    initCount() {
        console.log(">>>res>> initCount")
        this.repairService.pushRepairCount(3);
        // this.repairService.messages$.subscribe(count=> console.log(">>>res>>666669999", count))

    }
    createRepair() {
        if(!this.files) {
            this.messageService.info('请上传图片');
            return;
        }
        if(this.files[0].size > IMAGE_SIZE) {
            this.messageService.info('图片大小不能超过5M');
            return;
        }
        this.repair.code = new Date().getTime().toString().slice(5,13);
        this.repair.repair_status = 0;
        this.repairService.create(this.sno, this.repair).subscribe(
            res => {
                this.createAttachment();
                this.messageService.success('报修申报成功');
                this.nav.push(RepairListPage);
            }
        )
        this.uploadImage();
    }
    selectedFileOnChanged(event:any) {
        this.currFile = event.currentTarget.files[0];
        this.attachment.fileName = this.currFile.name.split('.')[0];
        this.attachment.filePath = FILE_PATH;
        this.attachment.fileFormat = this.currFile.name.split('.')[1];
        this.files = event.target.files;
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.currFile));
        this.files = event.target.files;
    }

    uploadImage() {
        this.fileService.handlerFileUpload(this.files).then(
            res => {
                // TODO this is ugly
            }
        ).then(() => {
                console.log(">>>>Upload Image Success>>>>")

            }
        );
    }
    createAttachment(){
        this.fileService.create(this.repair.code, this.attachment).subscribe(res=> {
            console.log(">>>>create Attachment>>>>");
        })
    }

}