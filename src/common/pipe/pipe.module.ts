/**
 * Created by evantang on 2018/2/4.
 */

import { NgModule } from '@angular/core';
import {AreaPipe} from "./area.pipe";
import {RepairStatusPipe} from "./repairStatus.pipe";
import {RolePipe} from "./role.pipe";


@NgModule({
  declarations: [
    AreaPipe,
    RepairStatusPipe,
    RolePipe
  ],
  imports: [
  ],
  exports: [
    AreaPipe,
    RepairStatusPipe,
    RolePipe
  ]
})
export class PipesModule { }
