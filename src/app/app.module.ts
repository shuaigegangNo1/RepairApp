import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, Events} from 'ionic-angular';
import { WindbellApp} from './app.component';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {DatePicker} from '@ionic-native/date-picker';
import {Environment} from "../environments/environment";
import {UIMessageService} from "../common/service/ui-message";
import {Http} from "@angular/http";
import {AuthConfig, AuthHttp} from "angular2-jwt";
import {CustomAuthHttp} from "../common/service/CustomAuthHttp";
import {EnvironmentDev} from "../environments/environment.dev";
import { IonicStorageModule, Storage } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {FormsModule} from "@angular/forms";
import {Network} from "@ionic-native/network";
import {loginPage} from "../pages/login/login"

import {RepairPageModule} from "../pages/repair/repair.list.module";
import {UserService} from "../common/service/userService";
import {RepairService} from "../common/service/repairService";
import {AuthService} from "../common/service/AuthService";
import {PipesModule} from "../common/pipe/pipe.module";
import {RepairRecordService} from "../common/service/repairRecordService";
import {AboutUpdatePage} from "../pages/about/about.update";
import {FileService} from "../common/service/fileService";
import {FileTransfer} from "@ionic-native/file-transfer";
export function getAuthHttp (http : Http, storage: Storage, message: UIMessageService, events: Events) {
  return new CustomAuthHttp(new AuthConfig({
    headerPrefix: "Bearer ",
    globalHeaders: [{'Content-Type':'application/json'}],
    tokenGetter : ( () => storage.get('token').then((token:string)=> token)),
  }), http, message, events)
}

export function getEnv (){
  return new EnvironmentDev();
}


@NgModule({
  declarations: [
    WindbellApp,
    AboutPage,
    TabsPage,
    loginPage,
    AboutUpdatePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(WindbellApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    RepairPageModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    WindbellApp,
    AboutPage,
    TabsPage,
    loginPage,
    AboutUpdatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    {
      provide : AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http, Storage, UIMessageService, Events]
    },
    {
      provide: Environment,
      useFactory: getEnv
    },
    DatePicker,
    UIMessageService,
    Network,
    AuthService,
    UserService,
    RepairService,
    RepairRecordService,
    FileService,
    FileTransfer
  ]
})
export class AppModule {}
