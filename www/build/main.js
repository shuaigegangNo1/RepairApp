webpackJsonp([0],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIMessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UIMessageService = (function () {
    //private messageStream = new Subject<string>();
    function UIMessageService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    UIMessageService.prototype.info = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'middle'
        }).present();
    };
    UIMessageService.prototype.success = function (message) {
        this.toastCtrl.create({
            message: "成功: " + message,
            duration: 2000,
            position: 'middle'
        }).present();
    };
    UIMessageService.prototype.error = function (message) {
        this.toastCtrl.create({
            message: "错误: " + message,
            duration: 2500,
            position: 'middle'
        }).present();
    };
    UIMessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], UIMessageService);
    return UIMessageService;
}());

//# sourceMappingURL=ui-message.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by huangxuewen on 2018/1/25.
 */








var User = (function () {
    function User(name, password) {
        this.name = name;
        this.password = password;
    }
    return User;
}());

var AuthService = (function () {
    function AuthService(http, authHttp, events, 
        // private message : NoticeService,
        storage) {
        this.http = http;
        this.authHttp = authHttp;
        this.events = events;
        this.storage = storage;
        console.log('Hello AuthProvider Provider');
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.name === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("请输入用户名和密码");
        }
        else {
            console.log('sending login request');
            var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
            return this.http.post(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* url */] + "/login", JSON.stringify(credentials), options)
                .map(function (res) {
                console.log('get token from server ::: ' + JSON.stringify(res.json().token));
                localStorage.setItem("token", res.json().token);
                _this.storage.set('token', res.json().token).then(function (o) {
                    _this.currentUser = new User(credentials.userid, credentials.passwd);
                    _this.events.publish('user:login');
                    console.log('user set local storage ::: ' + JSON.stringify(_this.currentUser));
                }).catch(function (e) {
                    console.log("token set exception", e);
                });
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                    // At this point make a request to your backend to make a real check!
                    var access = true;
                    observer.next(access);
                    observer.complete();
                });
            });
        }
    };
    AuthService.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            _this.storage.remove('token').then(function () {
                observer.next(true);
                observer.complete();
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=AuthService.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/repair/repair.list.module": [
		214
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepairPageModule", function() { return RepairPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repair_list__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repair_detail__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_pipe_pipe_module__ = __webpack_require__(400);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RepairPageModule = (function () {
    function RepairPageModule() {
    }
    RepairPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__repair_list__["a" /* RepairListPage */],
                __WEBPACK_IMPORTED_MODULE_3__repair_detail__["a" /* RepairDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__repair_list__["a" /* RepairListPage */]),
                __WEBPACK_IMPORTED_MODULE_4__common_pipe_pipe_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__repair_list__["a" /* RepairListPage */],
                __WEBPACK_IMPORTED_MODULE_3__repair_detail__["a" /* RepairDetailPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__repair_detail__["a" /* RepairDetailPage */]
            ]
        })
    ], RepairPageModule);
    return RepairPageModule;
}());

//# sourceMappingURL=repair.list.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_ui_message__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_model_Repair__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__repair_detail__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_service_userService__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_service_repairService__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the RiskCategoryListTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RepairListPage = (function () {
    function RepairListPage(navCtrl, alertCtrl, events, _messageService, userService, repairService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this._messageService = _messageService;
        this.userService = userService;
        this.repairService = repairService;
        this.repairCriteria = new __WEBPACK_IMPORTED_MODULE_3__common_model_Repair__["a" /* RepairCriteria */]();
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad RiskCategoryListTestPage');
    // }
    RepairListPage.prototype.ngAfterViewInit = function () {
        this.getRepairList();
    };
    RepairListPage.prototype.goToRepairDetail = function (repair) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__repair_detail__["a" /* RepairDetailPage */], {
            repair: repair,
        });
    };
    RepairListPage.prototype.getUserListByRole = function () {
        this.userService.getUserListByRole(2).subscribe(function (res) { return console.log("res======", JSON.stringify(res)); });
    };
    RepairListPage.prototype.getRepairList = function () {
        var _this = this;
        this.repairCriteria.sno = "666";
        this.repairService.getRepairList(this.repairCriteria).subscribe(function (res) {
            _this.repairList = res.result.content;
            _this.totalRecords = res.result.totalElements;
        });
    };
    RepairListPage.prototype.refreshRepairList = function () {
        var _this = this;
        // if (this.criteria.page == 1){
        //   if (this.lastScroll)
        //     this.lastScroll.enable(true)
        //   this.valuesForRiskCommonIssueList = res.result
        //   this.totalRecords = res.totalRecords
        // }else{
        //   this.valuesForRiskCommonIssueList = this.valuesForRiskCommonIssueList.concat(res.result)
        // }
        this.lastScroll.enable(true);
        this.repairService.getRepairList(this.repairCriteria).subscribe(function (res) {
            _this.repairList = _this.repairList.concat(res.result.content);
        });
    };
    RepairListPage.prototype.showMore = function (infiniteScroll) {
        this.lastScroll = infiniteScroll;
        if (this.repairList.length < this.totalRecords) {
            this.repairCriteria.skip++;
            this.refreshRepairList();
        }
        else {
            infiniteScroll.enable(false);
        }
    };
    RepairListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-repair-list',template:/*ion-inline-start:"/Users/huangxuewen/Workspace/angular/RepairApp/src/pages/repair/repair.list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button (click)= "createRepair() " >\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>我的报修</ion-title>\n    <!--gi.refresh();-->\n    <ion-buttons end>\n      <button ion-button (click)= " refreshRiskCategoryList(); " >\n        <ion-icon name="refresh-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!--<ion-searchbar (ionInput)="search($event)"-->\n                 <!--&gt;</ion-searchbar>-->\n        <ion-list>\n          <button ion-item *ngFor="let repair of repairList" (click)="goToRepairDetail(repair)">\n            <div [ngStyle]="{\'color\':repair.isAlarmed?\'red\':\'#488aff\'}">报修单号：{{ repair.id }}</div>\n            <p>报修时间：{{repair.create_time |date: \'yyyy-MM-dd HH:mm:ss\'}}</p>\n            <p>报修状态：{{repair.repair_status | repairStatus}}</p>\n            <p>报修内容：{{repair.content}}</p>\n          </button>\n        </ion-list>\n  <ion-infinite-scroll (ionInfinite)="showMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/huangxuewen/Workspace/angular/RepairApp/src/pages/repair/repair.list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__common_service_ui_message__["a" /* UIMessageService */],
            __WEBPACK_IMPORTED_MODULE_5__common_service_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__common_service_repairService__["a" /* RepairService */]])
    ], RepairListPage);
    return RepairListPage;
}());

//# sourceMappingURL=repair.list.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by huangxuewen on 2018/1/30.
 */



var RepairDetailPage = (function () {
    function RepairDetailPage(navCtrl, alertCtrl, network, platform, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.platform = platform;
        this.navParams = navParams;
    }
    RepairDetailPage.prototype.ngOnInit = function () {
        this.repair = this.navParams.get('repair');
    };
    RepairDetailPage.prototype.getTaskInfo = function () {
    };
    RepairDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'repair-detail-page',template:/*ion-inline-start:"/Users/huangxuewen/Workspace/angular/RepairApp/src/pages/repair/repair.detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>报修详情</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!--基本信息模块-->\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-list-box" style="color: lightseagreen"></ion-icon>&nbsp;\n      基本信息\n    </ion-list-header>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <ion-icon name="ios-cube-outline" style="color: lightblue; font-size: 200%"></ion-icon>\n        </ion-avatar>\n        <h3>\n          <ion-row>\n            <ion-col col-11 style="overflow: hidden;white-space: normal">\n              <b>报修单号:&nbsp; </b>{{repair.id}}\n\n            </ion-col>\n          </ion-row>\n        </h3>\n      </ion-item>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <ion-icon name="ios-cube-outline" style="color: lightblue; font-size: 200%"></ion-icon>\n        </ion-avatar>\n        <h3>\n          <ion-row>\n            <ion-col col-11 style="overflow: hidden;white-space: normal">\n              <b>报修状态:&nbsp; </b>{{repair.repair_status| repairStatus}}\n\n            </ion-col>\n          </ion-row>\n        </h3>\n      </ion-item>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <ion-icon name="ios-pin-outline" style="color: lightblue; font-size: 200%"></ion-icon>\n        </ion-avatar>\n        <h3>\n          <ion-row>\n            <ion-col col-11 style="overflow: hidden;white-space: normal">\n              <b>报修地址:&nbsp; </b> {{repair.address}}\n            </ion-col>\n            <!--<ion-col style="color: #8e9093" col-1>-->\n            <!--<ion-icon name="ios-arrow-forward"></ion-icon>-->\n            <!--</ion-col>-->\n          </ion-row>\n        </h3>\n      </ion-item>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <ion-icon name="ios-time" class="company-icon"></ion-icon>\n        </ion-avatar>\n        <h3>\n          <ion-col>\n            <b>报修时间:&nbsp; </b> {{repair.create_time| date: \'yyyy-MM-dd HH:mm:ss\'}}\n          </ion-col>\n        </h3>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/huangxuewen/Workspace/angular/RepairApp/src/pages/repair/repair.detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RepairDetailPage);
    return RepairDetailPage;
}());

//# sourceMappingURL=repair.detail.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseService__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(39);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(a_http, http) {
        var _this = _super.call(this) || this;
        _this.a_http = a_http;
        _this.http = http;
        return _this;
    }
    UserService.prototype.getServiceUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* DOMAIN_SERVER_URL */] + __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* USER_URL */];
    };
    // login(username: string, password: string): Observable<any> {
    //     return this.http
    //         .post(this.getServiceUrl() + "/login", {
    //             username: username,
    //             password: password
    //         })
    //         .catch(this.handleError);
    // }
    // getUserListbyRole(role: number) {
    //   return this.a_http.get(this.getServiceUrl() + '/user/userList?role=' + role,  this.getJsonHeader())
    //     .map(res => res.json()).catch(this.handleError)
    // }
    // getUserListByRole1(role: number) {
    //   return this.http.get<User[]>(this.getServiceUrl()+ "/userList?role="+ role, this.getJsonHeader())
    //     .catch(this.handleError);
    // }
    // protected getJsonHeaderWithJWT() {
    //   const headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   const token = localStorage.getItem('token');
    //     headers.append('Authorization', 'Bearer ' + token)
    //   const options = new RequestOptions({headers: headers});
    //   return options;
    // }
    UserService.prototype.getUserListByRole = function (role) {
        return this.http.get(this.getServiceUrl() + "/userList?role=" + role, this.getJsonHeaderWithJWT()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]])
    ], UserService);
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_2__baseService__["a" /* BaseService */]));

//# sourceMappingURL=userService.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(39);
/**
 * Created by syg on 5/29/18.
 */



var BaseService = (function () {
    function BaseService() {
        this._serviceServerBaseUrl = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* DOMAIN_SERVER_URL */];
    }
    BaseService.prototype.handleError = function (error) {
        var errorMessage = error.message;
        if (error.error) {
            errorMessage += ":" + error.error;
        }
        switch (error.status) {
            case 401:
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw("invalid token");
            default:
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(errorMessage);
        }
    };
    BaseService.prototype.getLoginUser = function () {
        return JSON.parse(localStorage.getItem("loginUser"));
    };
    BaseService.prototype.getJsonHeaderWithoutJWT = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return options;
    };
    BaseService.prototype.getJsonHeaderWithJWT = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var token = localStorage.getItem('token');
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return options;
    };
    return BaseService;
}());

//# sourceMappingURL=baseService.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseService__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(73);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by huangxuewen on 2018/4/17.
 */




var RepairService = (function (_super) {
    __extends(RepairService, _super);
    function RepairService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    RepairService.prototype.getServiceUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* DOMAIN_SERVER_URL */];
    };
    RepairService.prototype.getRepairList = function (repairCriteria) {
        return this.http.post(this.getServiceUrl() + '/repair/querylist?page=' + repairCriteria.skip, JSON.stringify(repairCriteria), this.getJsonHeaderWithJWT()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RepairService.prototype.create = function (userId, repair) {
        return this.http.post(this.getServiceUrl() + '/repair/create?userId=' + userId, JSON.stringify(repair), this.getJsonHeaderWithJWT()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RepairService.prototype.update = function (repair) {
        return this.http.post(this.getServiceUrl() + '/repair/update', JSON.stringify(repair), this.getJsonHeaderWithJWT()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RepairService.prototype.getRepairDetail = function (repairId) {
        return this.http.get(this.getServiceUrl() + '/repair/detail?repairId=' + repairId, this.getJsonHeaderWithJWT()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RepairService.prototype.updateRepairman = function (repairId, repairmanId) {
        return this.http.get(this.getServiceUrl() + '/repair/update?repairId=' + repairId + '&repairmanId=' + repairmanId, this.getJsonHeaderWithJWT()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RepairService.prototype.getAssertRepairDetail = function (repairId) {
        return this.http.get(this.getServiceUrl() + '/repair/detail4Assert?repairId=' + repairId, this.getJsonHeaderWithJWT()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RepairService.prototype.getRepairCount = function (repairStatus) {
        return this.http.get(this.getServiceUrl() + '/repair/countByRepairStatus?repairStatus=' + repairStatus, this.getJsonHeaderWithJWT()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RepairService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], RepairService);
    return RepairService;
}(__WEBPACK_IMPORTED_MODULE_2__baseService__["a" /* BaseService */]));

//# sourceMappingURL=repairService.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service_AuthService__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by huangxuewen on 2018/1/25.
 */




var loginPage = (function () {
    function loginPage(nav, auth, alertCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        // name: string;
        // passWord: string;
        // constructor(public navCtrl: NavController, public alertCtrl: AlertController){
        // }
        // login(){
        //   this.navCtrl.push(TabsPage,{loginFlag: true});
        //   /*    if(this.name ==='admin' && this.passWord === '123'){
        //    this.navCtrl.push(IndexComponent,{loginFlag: true});
        //    }else{
        //    let alert = this.alertCtrl.create(
        //    {
        //    title: '登录失败',
        //    subTitle: '用户名和密码不一致',
        //    buttons: ['确认']
        //    });
        //    alert.present();
        //    }*/
        // }
        this.user = { name: '', password: '' };
    }
    loginPage.prototype.login = function () {
        var _this = this;
        this.auth.login(this.user).subscribe(function (allowed) {
            if (allowed) {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.showError("用户名/密码不正确");
            }
        }, function (error) {
            if (error.status == 401) {
                _this.showError("用户名/密码不正确");
            }
            else {
                _this.showError("网络未连接");
            }
        });
    };
    // showLoading() {
    //   this.loading = this.loadingCtrl.create({
    //     content: '正在连接中...',
    //     dismissOnPageChange: true
    //   });
    //   this.loading.present();
    // }
    loginPage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: text,
            buttons: ['确认']
        });
        alert.present(prompt);
    };
    loginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/huangxuewen/Workspace/angular/RepairApp/src/pages/login/login.html"*/'\n<ion-content padding>\n  <div style="margin-top:10%">\n    <ion-title>\n      <h1>\n        报修系统\n      </h1>\n      <h2>\n        常州轻工职业技术学院\n      </h2>\n    </ion-title>\n    <ion-list style="margin-top:10%">\n      <ion-item style="background-color: #f3fffd">\n        <ion-label floating> 用户名</ion-label>\n        <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n      </ion-item>\n\n      <ion-item style="background-color: #f3fffd">\n        <ion-label floating> 密码</ion-label>\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n\n    </ion-list>\n    <div padding>\n      <button ion-button full (click)="login()">登录</button>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/huangxuewen/Workspace/angular/RepairApp/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__common_service_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], loginPage);
    return loginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repair_repair_list__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service_AuthService__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(auth, events) {
        this.auth = auth;
        this.events = events;
        this.aboutRoot = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.RepairRoot = __WEBPACK_IMPORTED_MODULE_2__repair_repair_list__["a" /* RepairListPage */];
        this.initPage();
    }
    TabsPage.prototype.initPage = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            console.log('user:login ：：： ' + JSON.stringify(_this.auth.getUserInfo()));
            if (_this.auth.getUserInfo().name === 'admin') {
                _this.isAdmin = true;
            }
            else {
                _this.isAdmin = false;
            }
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/huangxuewen/Workspace/angular/RepairApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="RepairRoot" tabTitle="我的报修" tabIcon="flame"></ion-tab>\n  <ion-tab [root]="aboutRoot" tabTitle="关于" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/huangxuewen/Workspace/angular/RepairApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__common_service_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/huangxuewen/Workspace/angular/RepairApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      关于\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/huangxuewen/Workspace/angular/RepairApp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthHttp */
/* unused harmony export getEnv */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_date_picker__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_service_ui_message__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_service_CustomAuthHttp__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environment_dev__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_repair_repair_list_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_service_userService__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_service_repairService__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__common_service_AuthService__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























function getAuthHttp(http, storage, message, events) {
    return new __WEBPACK_IMPORTED_MODULE_13__common_service_CustomAuthHttp__["a" /* CustomAuthHttp */](new __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__["AuthConfig"]({
        headerPrefix: "Bearer ",
        globalHeaders: [{ 'Content-Type': 'application/json' }],
        tokenGetter: (function () { return storage.get('token').then(function (token) { return token; }); }),
    }), http, message, events);
}
function getEnv() {
    return new __WEBPACK_IMPORTED_MODULE_14__environments_environment_dev__["a" /* EnvironmentDev */]();
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* WindbellApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* loginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* WindbellApp */], {}, {
                    links: [
                        { loadChildren: '../pages/repair/repair.list.module#RepairPageModule', name: 'RepairListPage', segment: 'repair.list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__pages_repair_repair_list_module__["RepairPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* WindbellApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* loginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"],
                    useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__["AuthHttp"],
                    useFactory: getAuthHttp,
                    deps: [__WEBPACK_IMPORTED_MODULE_11__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_10__common_service_ui_message__["a" /* UIMessageService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* Environment */],
                    useFactory: getEnv
                },
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_10__common_service_ui_message__["a" /* UIMessageService */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_23__common_service_AuthService__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_21__common_service_userService__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_22__common_service_repairService__["a" /* RepairService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Repair */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairCriteria; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseCriteria__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseModule__ = __webpack_require__(390);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by huangxuewen on 2018/5/3.
 */


var Repair = (function (_super) {
    __extends(Repair, _super);
    function Repair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Repair;
}(__WEBPACK_IMPORTED_MODULE_1__BaseModule__["a" /* BaseModule */]));

var RepairCriteria = (function (_super) {
    __extends(RepairCriteria, _super);
    function RepairCriteria() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = '';
        _this.isFinish = '';
        _this.isEvaluate = '';
        return _this;
    }
    return RepairCriteria;
}(__WEBPACK_IMPORTED_MODULE_0__BaseCriteria__["a" /* BaseCriteria */]));

//# sourceMappingURL=Repair.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseCriteria; });
/**
 * Created by huangxuewen on 2018/3/30.
 */
var BaseCriteria = (function () {
    function BaseCriteria() {
        this.skip = 0;
        this.pagesize = 10;
    }
    return BaseCriteria;
}());

//# sourceMappingURL=BaseCriteria.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModule; });
var BaseModule = (function () {
    function BaseModule() {
    }
    return BaseModule;
}());

//# sourceMappingURL=BaseModule.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_pipe__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repairStatus_pipe__ = __webpack_require__(402);
/**
 * Created by evantang on 2018/2/4.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__area_pipe__["a" /* AreaPipe */],
                __WEBPACK_IMPORTED_MODULE_2__repairStatus_pipe__["a" /* RepairStatusPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__area_pipe__["a" /* AreaPipe */],
                __WEBPACK_IMPORTED_MODULE_2__repairStatus_pipe__["a" /* RepairStatusPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by huangxuewen on 2018/5/3.
 */

var AreaPipe = (function () {
    function AreaPipe() {
    }
    AreaPipe.prototype.transform = function (value, args) {
        if (value === 0) {
            return '公寓区';
        }
        else if (value === 1) {
            return '教学区';
        }
        else if (value === 2) {
            return '办公场所(室内公共设施)';
        }
        else if (value === 3) {
            return '室外公共设施';
        }
        else if (value === 4) {
            return '绿化卫生';
        }
        else if (value === 5) {
            return '食堂';
        }
        else if (value === 6) {
            return '其他';
        }
        else {
            return '';
        }
    };
    AreaPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'area'
        })
    ], AreaPipe);
    return AreaPipe;
}());

//# sourceMappingURL=area.pipe.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairStatusPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by huangxuewen on 2018/5/3.
 */

var RepairStatusPipe = (function () {
    function RepairStatusPipe() {
    }
    RepairStatusPipe.prototype.transform = function (value, args) {
        if (value === 0) {
            return '未受理';
        }
        else if (value === 1) {
            return '不予受理';
        }
        else if (value === 2) {
            return '处理中';
        }
        else if (value === 3) {
            return '待评价';
        }
        else if (value === 4) {
            return '已完成';
        }
        else {
            return '';
        }
    };
    RepairStatusPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'repairStatus'
        })
    ], RepairStatusPipe);
    return RepairStatusPipe;
}());

//# sourceMappingURL=repairStatus.pipe.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindbellApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_service_ui_message__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WindbellApp = (function () {
    function WindbellApp(platform, statusBar, splashScreen, alertCtrl, network, messageService) {
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.messageService = messageService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* loginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // this.checkNetWork();
        });
    }
    WindbellApp.prototype.checkNetWork = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            var alert = _this.alertCtrl.create({
                title: '网络异常',
                subTitle: '检查网络设置',
                buttons: ['确认']
            });
            alert.present();
        });
        var connectSubscription = this.network.onConnect().subscribe(function () {
            console.log('network connected!');
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(function () {
                if (_this.network.type === 'wifi') {
                    console.log('we got a wifi connection, woohoo!');
                }
            }, 3000);
        });
    };
    WindbellApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/huangxuewen/Workspace/angular/RepairApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/huangxuewen/Workspace/angular/RepairApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6__common_service_ui_message__["a" /* UIMessageService */]])
    ], WindbellApp);
    return WindbellApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Environment; });
var Environment = (function () {
    function Environment() {
        this.pageSize = 2;
    }
    return Environment;
}());

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomAuthHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var CustomAuthHttp = (function (_super) {
    __extends(CustomAuthHttp, _super);
    function CustomAuthHttp(options, http, message, events, defOpts) {
        var _this = _super.call(this, options, http, defOpts) || this;
        _this.message = message;
        _this.events = events;
        return _this;
    }
    CustomAuthHttp.prototype.request = function (url, options) {
        var _this = this;
        return _super.prototype.request.call(this, url, options)
            .catch(function (e, c) { return _this.onCatch(e, c); })
            .do(function (res) {
            //console.log("custom http success " + url)
            _this.onSuccess(res);
            var restResult = res.json();
            if (restResult.code != 'I001') {
                if (restResult.code.startsWith("LE")) {
                    _this.info(restResult.message);
                }
                else {
                    _this.onError(restResult.message);
                }
                //then bypass subsequent success scribe, and ignore it here
                throw __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(restResult);
            }
        }, function (error) {
            _this.onError(error);
        }).catch(function (err, caught) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("ignored error");
        }).finally(function () {
            _this.onFinally();
        });
    };
    CustomAuthHttp.prototype.getFullUrl = function (url) {
        //return environment.apiEndpoint + url;
        return null;
    };
    CustomAuthHttp.prototype.beforeRequest = function () {
        //this.notifyService.showPreloader();
    };
    CustomAuthHttp.prototype.afterRequest = function () {
        //this.notifyService.hidePreloader();
    };
    CustomAuthHttp.prototype.onCatch = function (error, caught) {
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"] && error.status == 0) {
            this.message.info("网络不给力哦");
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    CustomAuthHttp.prototype.onSuccess = function (res) {
    };
    CustomAuthHttp.prototype.info = function (s) {
        this.message.info(s);
    };
    CustomAuthHttp.prototype.onError = function (error) {
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Response"]) {
            if (error.status == 403) {
                this.events.publish("user:unauthenticated");
            }
        }
        else if ("" + error == 'Error: No JWT present or has expired') {
            this.events.publish("user:unauthenticated");
        }
        else {
            this.message.error(error);
        }
    };
    CustomAuthHttp.prototype.onFinally = function () {
        this.afterRequest();
    };
    return CustomAuthHttp;
}(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]));

//# sourceMappingURL=CustomAuthHttp.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentDev; });
var EnvironmentDev = (function () {
    function EnvironmentDev() {
        this.urlPrefix = "http://localhost:8088/";
        //ocrKey = "AmYUZFPPwhqB9GLeXvqjgF"
        //ocrSecret = "1d72680629534e09aaaf47bff34ce6f9"
        this.ocrKey = "F7j8S8D5UttmMZuQULzkJa";
        this.ocrSecret = "8118729b60314e4d9c863086092be6a8";
        this.pageSize = 20;
        this.downloadLink = "http://localhost:8088/app/release/lovelystove.apk";
        this.version = "201711271104";
    }
    return EnvironmentDev;
}());

//# sourceMappingURL=environment.dev.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return url; });
/* unused harmony export PAGESIZE */
/* unused harmony export FILE_DOWNLOAD_URL */
/* unused harmony export IMAGE_DOWNLOAD_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOMAIN_SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_URL; });
/* unused harmony export UPLOAD_IMAGE_URL */
/* unused harmony export UPLOAD_MULTI_URL */
var url = 'http://localhost:8090';
var PAGESIZE = 20;
var FILE_DOWNLOAD_URL = url + "/resources/upload";
var IMAGE_DOWNLOAD_URL = url + "/resources/image";
var DOMAIN_SERVER_URL = url;
var USER_URL = "/user";
var UPLOAD_IMAGE_URL = DOMAIN_SERVER_URL + "/image";
var UPLOAD_MULTI_URL = DOMAIN_SERVER_URL + "/upload/multiple";
//# sourceMappingURL=constants.js.map

/***/ })

},[363]);
//# sourceMappingURL=main.js.map