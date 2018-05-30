import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {RepairListPage} from './repair.list';
import {RepairDetailPage} from "./repair.detail";
import {PipesModule} from "../../common/pipe/pipe.module";

@NgModule({
  declarations: [
    RepairListPage,
    RepairDetailPage
  ],
  imports: [
    IonicPageModule.forChild(RepairListPage),
    PipesModule
  ],
  exports: [
    RepairListPage,
    RepairDetailPage
  ],
  entryComponents: [
    RepairDetailPage

  ]
})
export class RepairPageModule {}
