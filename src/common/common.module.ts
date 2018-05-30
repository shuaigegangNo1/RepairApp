/**
 * Created by evantang on 2017/12/28.
 */
import { IonicModule, } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { FileUploadComponent } from './component/file-upload.component'
@NgModule({
  declarations:[ FileUploadComponent ],
  imports:[IonicModule],
  exports: [FileUploadComponent ]
})
export class CommonModule{}
