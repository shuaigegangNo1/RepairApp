/**
 * Created by evantang on 2018/2/4.
 */

import { NgModule } from '@angular/core';
import {AreaPipe} from "./area.pipe";
import {RepairStatusPipe} from "./repairStatus.pipe";


@NgModule({
  declarations: [
    AreaPipe,
    RepairStatusPipe
  ],
  imports: [
  ],
  exports: [
    AreaPipe,
    RepairStatusPipe
  ]
})
export class PipesModule { }
