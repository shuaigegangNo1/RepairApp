import { Component, ElementRef, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { AuthHttp } from 'angular2-jwt'
import { FileService } from '../service/file-service'

@Component({
  selector: 'file-upload',
  //template: '<input type="file" [multiple]="multiple" #fileInput>'
  //TODO: put the template outside 
  template: `
  <label [for]="randomId" class="custom-file-upload">
      <ion-icon *ngIf="iconType=='camera'" name="camera"></ion-icon>
      <div *ngIf="iconType=='camera-add'" style="cursor: pointer; ">
        <ion-icon  style="font-size:50px;display-block" name="camera"></ion-icon>
        <ion-icon style="position:relative; 
                display:block; 
                top: -43px;
                border-radius:8px;
                background:white;
                font-size:22px;
                z-index:10;
                left:9%;"

                name="add-circle"></ion-icon>
      </div>
  </label>

  <input 
      (change)="upload()"
      [id]="randomId" type="file" #fileInput/>
  `,
  styles: [`
    input[type="file"] { display: none; }
  `
  ]
  //template: '<input type="file" #fileInput>'
})
export class FileUploadComponent {
  @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;
  @Output() fileUploaded : EventEmitter<string> = new EventEmitter<string>()

  @Input() iconType="camera" //camera-add

  randomId = "file-upload" + Math.random()

  constructor(
    private http: AuthHttp,
    private fileService: FileService
  ) {}

  upload() {
    console.log("upload called " ) 
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    console.log('file count: ' + fileCount)
    if (fileCount > 0) { // a file was selected
        for (let i = 0; i < fileCount; i++) {
            formData.append('file', inputEl.files.item(i));
          console.log('file is: ', inputEl.files.item(i))
        }
      console.log(' file upload ... ')
      this.fileService.uploadFile(formData).subscribe(
        (file: string)=>{
          console.log('uploaded file is '  + file)
          this.fileUploaded.emit(file)
        }
      )
    }
  }
}
