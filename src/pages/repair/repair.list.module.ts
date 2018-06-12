import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {RepairListPage} from './repair.list';
import {RepairDetailPage} from "./repair.detail";
import {PipesModule} from "../../common/pipe/pipe.module";
import {RepairCreatePage} from "./repair.create";
import {RepairRecordListPage} from "./repair.record.list";
import {IonicImageViewerModule} from "ionic-img-viewer";

@NgModule({
  declarations: [
    RepairListPage,
    RepairDetailPage,
    RepairCreatePage,
    RepairRecordListPage,
  ],
  imports: [
    IonicPageModule.forChild(RepairListPage),
    PipesModule,
    IonicImageViewerModule
  ],
  exports: [
    RepairListPage,
    RepairDetailPage,
    RepairCreatePage,
    RepairRecordListPage,
  ],
  entryComponents: [
    RepairDetailPage,
    RepairCreatePage,
    RepairRecordListPage,

  ]
})
export class RepairPageModule {}
