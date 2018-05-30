import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import {RepairListPage} from "../repair/repair.list";
import {Events} from "ionic-angular";
import {AuthService} from "../../common/service/AuthService";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  aboutRoot = AboutPage;
  RepairRoot = RepairListPage;
  isAdmin : Boolean;

  constructor(private auth: AuthService, public events : Events) {
      this.initPage()
  }

  initPage() {
    this.events.subscribe('user:login', ()=>{
      console.log('user:login ：：： ' + JSON.stringify(this.auth.getUserInfo()))
      if (this.auth.getUserInfo().name === 'admin') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    })
  }
}
