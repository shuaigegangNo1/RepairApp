import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {RepairListPage} from './repair.list';
import {RepairDetailPage} from "./repair.detail";
import {PipesModule} from "../../common/pipe/pipe.module";
import {RepairCreatePage} from "./repair.create";

@NgModule({
  declarations: [
    RepairListPage,
    RepairDetailPage,
    RepairCreatePage
  ],
  imports: [
    IonicPageModule.forChild(RepairListPage),
    PipesModule
  ],
  exports: [
    RepairListPage,
    RepairDetailPage,
    RepairCreatePage
  ],
  entryComponents: [
    RepairDetailPage,
    RepairCreatePage

  ]
})
export class RepairPageModule {}
