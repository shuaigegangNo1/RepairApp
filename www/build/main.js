webpackJsonp([0],{

/***/ 121:
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

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service_AuthService__ = __webpack_require__(165);
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
            selector: 'page-login',template:/*ion-inline-start:"/sandbox/Projects/RepairApp/src/pages/login/login.html"*/'\n<ion-content padding>\n  <div style="margin-top:10%">\n    <ion-title>\n      <h1>\n        报修系统\n      </h1>\n      <h2>\n        常州轻工职业技术学院\n      </h2>\n    </ion-title>\n    <ion-list style="margin-top:10%">\n      <ion-item style="background-color: #f3fffd">\n        <ion-label floating> 用户名</ion-label>\n        <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n      </ion-item>\n\n      <ion-item style="background-color: #f3fffd">\n        <ion-label floating> 密码</ion-label>\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n\n    </ion-list>\n    <div padding>\n      <button ion-button full (click)="login()">登录</button>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/sandbox/Projects/RepairApp/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__common_service_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], loginPage);
    return loginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service_userService__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_model_User__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_update__ = __webpack_require__(364);
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
    function AboutPage(navCtrl, userService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__common_model_User__["a" /* User */]();
        this.sno = localStorage.getItem('sno');
        this.getUserDetail();
    }
    AboutPage.prototype.getUserDetail = function () {
        var _this = this;
        this.userService.getUserbySno(this.sno).subscribe(function (res) { return _this.user = res.result; });
    };
    AboutPage.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('sno');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* loginPage */]);
    };
    AboutPage.prototype.jumpToUpdateUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__about_update__["a" /* AboutUpdatePage */], { user: this.user });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/sandbox/Projects/RepairApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>\n      个人信息\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <ion-icon name="ios-contact-outline" class="company-about"></ion-icon>\n        </ion-avatar>\n        姓名\n        <div item-content item-end>\n          {{user.name}}\n        </div>\n      </ion-item>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <ion-icon name="ios-person-outline" class="company-about"></ion-icon>\n        </ion-avatar>\n        账号\n        <div item-content item-end>\n          {{user.sno}}\n        </div>\n      </ion-item>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <ion-icon name="ios-time" class="company-about"></ion-icon>\n        </ion-avatar>\n        职业\n        <div item-content item-end>\n          {{user.role | role}}\n        </div>\n      </ion-item>\n\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <button ion-item (click)="jumpToUpdateUser()">\n        <ion-avatar item-start>\n          <ion-icon name="ios-call-outline" class="company-about"></ion-icon>\n        </ion-avatar>\n        联系方式\n        <div item-content item-end>\n          {{user.email}}\n        </div>\n      </button>\n    </ion-item-sliding>\n  </ion-list>\n  <button ion-button full color="danger" (click)="logout()">退出</button>\n</ion-content>\n'/*ion-inline-end:"/sandbox/Projects/RepairApp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__common_service_userService__["a" /* UserService */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseService__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
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
 * Created by syg on 5/31/18.
 */




var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    UserService.prototype.getServiceUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* DOMAIN_SERVER_URL */] + __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* USER_URL */];
    };
    // login(username: string, password: string): Observable<any> {
    //     return this.http
    //         .post(this.getServiceUrl() + "/login", {
    //             username: username,
    //             password: password
    //         })
    //         .catch(this.handleError);
    // }
    UserService.prototype.getUserbySno = function (sno) {
        return this.http.get(this.getServiceUrl() + '/queryBySno?sno=' + sno, this.getJsonHeaderWithJWT())
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    UserService.prototype.getUserListByRole = function (role) {
        return this.http.get(this.getServiceUrl() + "/userList?role=" + role, this.getJsonHeaderWithJWT()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    UserService.prototype.update = function (user) {
        return this.http.post(this.getServiceUrl() + '/update', JSON.stringify(user), this.getJsonHeaderWithJWT())
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]])
    ], UserService);
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_2__baseService__["a" /* BaseService */]));

//# sourceMappingURL=userService.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(44);
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
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.name === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("请输入用户名和密码");
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({ headers: headers });
            return this.http.post(__WEBPACK_IMPORTED_MODULE_7__constants__["f" /* url */] + "/login", JSON.stringify(credentials), options)
                .map(function (res) {
                console.log('get token from server ::: ' + JSON.stringify(res.json().token));
                localStorage.setItem("token", res.json().token);
                localStorage.setItem("sno", credentials.name);
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
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=AuthService.js.map

/***/ }),

/***/ 179:
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
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/repair/repair.list.module": [
		223
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
webpackAsyncContext.id = 222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepairPageModule", function() { return RepairPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repair_list__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repair_detail__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_pipe_pipe_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__repair_create__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__repair_record_list__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__ = __webpack_require__(409);
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
                __WEBPACK_IMPORTED_MODULE_3__repair_detail__["a" /* RepairDetailPage */],
                __WEBPACK_IMPORTED_MODULE_5__repair_create__["a" /* RepairCreatePage */],
                __WEBPACK_IMPORTED_MODULE_6__repair_record_list__["a" /* RepairRecordListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__repair_list__["a" /* RepairListPage */]),
                __WEBPACK_IMPORTED_MODULE_4__common_pipe_pipe_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__repair_list__["a" /* RepairListPage */],
                __WEBPACK_IMPORTED_MODULE_3__repair_detail__["a" /* RepairDetailPage */],
                __WEBPACK_IMPORTED_MODULE_5__repair_create__["a" /* RepairCreatePage */],
                __WEBPACK_IMPORTED_MODULE_6__repair_record_list__["a" /* RepairRecordListPage */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__repair_detail__["a" /* RepairDetailPage */],
                __WEBPACK_IMPORTED_MODULE_5__repair_create__["a" /* RepairCreatePage */],
                __WEBPACK_IMPORTED_MODULE_6__repair_record_list__["a" /* RepairRecordListPage */],
            ]
        })
    ], RepairPageModule);
    return RepairPageModule;
}());

//# sourceMappingURL=repair.list.module.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RepairCriteria; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseCriteria__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseModule__ = __webpack_require__(76);
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

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repair_list__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service_ui_message__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service_repairService__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__repair_record_list__ = __webpack_require__(226);
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
    function RepairDetailPage(navCtrl, messageService, repairService, platform, navParams) {
        this.navCtrl = navCtrl;
        this.messageService = messageService;
        this.repairService = repairService;
        this.platform = platform;
        this.navParams = navParams;
    }
    RepairDetailPage.prototype.ngOnInit = function () {
        this.repair = this.navParams.get('repair');
    };
    RepairDetailPage.prototype.evaluateRepair = function () {
        var _this = this;
        if (!this.repair.rate) {
            this.messageService.error('未选择评分等级');
            return;
        }
        this.repair.isEvaluate = 'y';
        this.repairService.update(this.repair).subscribe(function (res) {
            console.log(">>>res>>", res.result);
            _this.messageService.success('评价成功');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__repair_list__["a" /* RepairListPage */]);
        });
    };
    RepairDetailPage.prototype.jumpRepairRecord = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__repair_record_list__["a" /* RepairRecordListPage */], {
            repairId: this.repair.id,
        });
    };
    RepairDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'repair-detail-page',template:/*ion-inline-start:"/sandbox/Projects/RepairApp/src/pages/repair/repair.detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>报修详情</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!--基本信息模块-->\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="md-list-box" style="color: lightseagreen"></ion-icon>&nbsp;\n      基本信息\n    </ion-list-header>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <ion-icon name="ios-information-circle-outline" style="color: lightblue; font-size: 200%"></ion-icon>\n        </ion-avatar>\n        <h3>\n          <ion-row>\n            <ion-col col-11 style="overflow: hidden;white-space: normal">\n              <b>报修单号:&nbsp; </b>{{repair.code}}\n            </ion-col>\n          </ion-row>\n        </h3>\n      </ion-item>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <ion-icon name="ios-locate-outline" style="color: lightblue; font-size: 200%"></ion-icon>\n        </ion-avatar>\n        <h3>\n          <ion-row>\n            <ion-col col-11 style="overflow: hidden;white-space: normal">\n              <b>区域:&nbsp; </b>{{repair.area| area}}\n\n            </ion-col>\n          </ion-row>\n        </h3>\n      </ion-item>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <ion-icon name="ios-pin-outline" style="color: lightblue; font-size: 200%"></ion-icon>\n        </ion-avatar>\n        <h3>\n          <ion-row>\n            <ion-col col-11 style="overflow: hidden;white-space: normal">\n              <b>报修地址:&nbsp; </b> {{repair.address}}\n            </ion-col>\n            <!--<ion-col style="color: #8e9093" col-1>-->\n            <!--<ion-icon name="ios-arrow-forward"></ion-icon>-->\n            <!--</ion-col>-->\n          </ion-row>\n        </h3>\n      </ion-item>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <ion-icon name="ios-time-outline" style="color: lightblue; font-size: 200%"></ion-icon>\n        </ion-avatar>\n        <h3>\n          <ion-col>\n            <b>报修时间:&nbsp; </b> {{repair.create_time| date: \'yyyy-MM-dd HH:mm:ss\'}}\n          </ion-col>\n        </h3>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n    <ion-item *ngIf="(repair.repair_status===3 && repair.isEvaluate ===\'n\')||(repair.repair_status===4 && repair.isEvaluate ===\'n\')">\n      <ion-label>评分等级</ion-label>\n      <ion-select [(ngModel)]="repair.rate" okText="确认" cancelText="取消" placeholder="请评分">\n        <ion-option value="20">一星</ion-option>\n        <ion-option value="40">二星</ion-option>\n        <ion-option value="60">三星</ion-option>\n        <ion-option value="80">四星</ion-option>\n        <ion-option value="100">五星</ion-option>\n      </ion-select>\n    </ion-item>\n  <div padding>\n    <button *ngIf="(repair.repair_status===3 && repair.isEvaluate ===\'n\')||(repair.repair_status===4 && repair.isEvaluate ===\'n\')" ion-button full (click)="evaluateRepair()">评价</button>\n    <button  color="secondary" *ngIf="repair.repair_status!==0 && repair.repair_status!==1" ion-button full (click)="jumpRepairRecord()">维修跟踪</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/sandbox/Projects/RepairApp/src/pages/repair/repair.detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__common_service_ui_message__["a" /* UIMessageService */],
            __WEBPACK_IMPORTED_MODULE_4__common_service_repairService__["a" /* RepairService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], RepairDetailPage);
    return RepairDetailPage;
}());

//# sourceMappingURL=repair.detail.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairRecordListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_model_RepairRecord__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service_repairRecordService__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RepairRecordListPage = (function () {
    function RepairRecordListPage(navCtrl, events, repairRecordService, navParams) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.repairRecordService = repairRecordService;
        this.navParams = navParams;
        this.repairRecordCriteria = new __WEBPACK_IMPORTED_MODULE_2__common_model_RepairRecord__["a" /* RepairRecordCriteria */]();
        this.repairRecordCriteria.id = this.navParams.get('repairId');
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad RiskCategoryListTestPage');
    // }
    RepairRecordListPage.prototype.ngAfterViewInit = function () {
        this.getRepairRecordList();
    };
    RepairRecordListPage.prototype.getRepairRecordList = function () {
        var _this = this;
        this.repairRecordService.getRepairRecordList(this.repairRecordCriteria)
            .subscribe(function (res) {
            _this.repairRecordList = res.result.content;
            if (_this.repairRecordList.length === 0) {
                _this.show = true;
            }
        });
    };
    RepairRecordListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-repair-record-list',template:/*ion-inline-start:"/sandbox/Projects/RepairApp/src/pages/repair/repair.record.list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>维修记录详情</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n        <ion-list>\n          <ion-item *ngFor="let repairRecord of repairRecordList">\n            <p>维修时间：{{repairRecord.create_time |date: \'yyyy-MM-dd HH:mm:ss\'}}</p>\n            <p>维修进展：{{repairRecord.repair_progress}}</p>\n          </ion-item>\n        </ion-list>\n        <ion-list *ngIf="show">\n            <ion-item>\n                暂无记录\n            </ion-item>\n        </ion-list>\n</ion-content>\n'/*ion-inline-end:"/sandbox/Projects/RepairApp/src/pages/repair/repair.record.list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__common_service_repairRecordService__["a" /* RepairRecordService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], RepairRecordListPage);
    return RepairRecordListPage;
}());

//# sourceMappingURL=repair.record.list.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairRecordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseService__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(44);
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




var RepairRecordService = (function (_super) {
    __extends(RepairRecordService, _super);
    function RepairRecordService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    RepairRecordService.prototype.getServiceUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* DOMAIN_SERVER_URL */];
    };
    RepairRecordService.prototype.create = function (repairId, repairRecord) {
        return this.http.post(this.getServiceUrl() + '/repairRecord/create?repairId=' + repairId, JSON.stringify(repairRecord), this.getJsonHeaderWithJWT()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RepairRecordService.prototype.getRepairRecordList = function (repairRecordCriteria) {
        return this.http.post(this.getServiceUrl() + '/repairRecord/querylist?page=' + repairRecordCriteria.skip, JSON.stringify(repairRecordCriteria), this.getJsonHeaderWithJWT()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    RepairRecordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], RepairRecordService);
    return RepairRecordService;
}(__WEBPACK_IMPORTED_MODULE_2__baseService__["a" /* BaseService */]));

//# sourceMappingURL=repairRecordService.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_repairService__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_model_Repair__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service_ui_message__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__repair_list__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_service_fileService__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_constants__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_model_Attachment__ = __webpack_require__(405);
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
 * Created by huangxuewen on 2018/5/30.
 */










var RepairCreatePage = (function () {
    function RepairCreatePage(nav, repairService, messageService, sanitizer, fileService) {
        this.nav = nav;
        this.repairService = repairService;
        this.messageService = messageService;
        this.sanitizer = sanitizer;
        this.fileService = fileService;
        this.repair = new __WEBPACK_IMPORTED_MODULE_3__common_model_Repair__["a" /* Repair */]();
        this.attachment = new __WEBPACK_IMPORTED_MODULE_9__common_model_Attachment__["a" /* Attachment */]();
        this.sno = localStorage.getItem('sno');
        this.imageUrl = "assets/imgs/default.jpeg";
        this.initCount();
    }
    RepairCreatePage.prototype.initCount = function () {
        console.log(">>>res>> initCount");
        this.repairService.pushRepairCount(3);
        // this.repairService.messages$.subscribe(count=> console.log(">>>res>>666669999", count))
    };
    RepairCreatePage.prototype.createRepair = function () {
        var _this = this;
        if (!this.files) {
            this.messageService.info('请上传图片');
            return;
        }
        if (this.files[0].size > __WEBPACK_IMPORTED_MODULE_8__common_constants__["c" /* IMAGE_SIZE */]) {
            this.messageService.info('图片大小不能超过5M');
            return;
        }
        this.repair.code = new Date().getTime().toString().slice(5, 13);
        this.repair.repair_status = 0;
        this.repairService.create(this.sno, this.repair).subscribe(function (res) {
            _this.createAttachment();
            _this.messageService.success('报修申报成功');
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__repair_list__["a" /* RepairListPage */]);
        });
        this.uploadImage();
    };
    RepairCreatePage.prototype.selectedFileOnChanged = function (event) {
        this.currFile = event.currentTarget.files[0];
        this.attachment.fileName = this.currFile.name.split('.')[0];
        this.attachment.filePath = __WEBPACK_IMPORTED_MODULE_8__common_constants__["b" /* FILE_PATH */];
        this.attachment.fileFormat = this.currFile.name.split('.')[1];
        this.files = event.target.files;
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.currFile));
        this.files = event.target.files;
    };
    RepairCreatePage.prototype.uploadImage = function () {
        this.fileService.handlerFileUpload(this.files).then(function (res) {
            // TODO this is ugly
        }).then(function () {
            console.log(">>>>Upload Image Success>>>>");
        });
    };
    RepairCreatePage.prototype.createAttachment = function () {
        this.fileService.create(this.repair.code, this.attachment).subscribe(function (res) {
            console.log(">>>>create Attachment>>>>");
        });
    };
    RepairCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'repair-create-page',template:/*ion-inline-start:"/sandbox/Projects/RepairApp/src/pages/repair/repair.create.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            报修申报\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div style="margin-top:10%">\n\n        <ion-list style="margin-top:10%">\n            <ion-item>\n                <ion-label floating> 报修内容描述<span style="color:red; font-size: 20px;">*</span></ion-label>\n                <ion-textarea type="text" [(ngModel)]="repair.content"></ion-textarea>\n            </ion-item>\n            <ion-item>\n                <ion-label>区域<span style="color:red; font-size: 20px;">*</span></ion-label>\n                <ion-select [(ngModel)]="repair.area" okText="确认" cancelText="取消" placeholder="请选择区域">\n                    <ion-option value="10">公寓区</ion-option>\n                    <ion-option value="11">图文楼</ion-option>\n                    <ion-option value="12">教学楼</ion-option>\n                    <ion-option value="13">工训楼</ion-option>\n                    <ion-option value="14">后勤综合楼</ion-option>\n                    <ion-option value="15">专业教学楼</ion-option>\n                    <ion-option value="16">文体中心</ion-option>\n                    <ion-option value="20">室外公共设施</ion-option>\n                    <ion-option value="30">绿化卫生</ion-option>\n                    <ion-option value="40">食堂</ion-option>\n                    <ion-option value="17">其他</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label floating> 详细地址<span style="color:red; font-size: 20px;">*</span></ion-label>\n                <ion-input type="text" [(ngModel)]="repair.address"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating> 联系方式<span style="color:red; font-size: 20px;">*</span></ion-label>\n                <ion-input type="text" [(ngModel)]="repair.telephone"></ion-input>\n            </ion-item>\n            <ion-item>\n                <img [src]="imageUrl"  imageViewer="imageUrl" width="60px" height="60px">\n                <div class="file-input">\n                    <p class="input-container">\n                        上传图片\n                        <input type="file" id="upload" name="upload"\n                               (change)="selectedFileOnChanged($event)" accept="image/*" multiple/>\n                    </p>\n                    <span id="name"></span>\n                </div>\n            </ion-item>\n            <!--<div padding-top>-->\n                <!--<button type="button" ion-button block (click)="uploadImage()">提交照片</button>-->\n            <!--</div>-->\n\n        </ion-list>\n        <div padding-top>\n            <button ion-button full (click)="createRepair()" *ngIf="repair.content&&repair.area&&repair.address&&repair.telephone">提交</button>\n            <button ion-button full disabled *ngIf="!repair.content||!repair.area||!repair.address||!repair.telephone">提交</button>\n        </div>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"/sandbox/Projects/RepairApp/src/pages/repair/repair.create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__common_service_repairService__["a" /* RepairService */],
            __WEBPACK_IMPORTED_MODULE_4__common_service_ui_message__["a" /* UIMessageService */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_7__common_service_fileService__["a" /* FileService */]])
    ], RepairCreatePage);
    return RepairCreatePage;
}());

//# sourceMappingURL=repair.create.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseService__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
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




var FileService = (function (_super) {
    __extends(FileService, _super);
    function FileService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this._fileMultiUploadUrl = __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* UPLOAD_IMAGE_URL */];
        return _this;
    }
    FileService.prototype.getServiceUrl = function () {
        return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* DOMAIN_SERVER_URL */];
    };
    FileService.prototype.handlerFileUpload = function (filesToUpload) {
        return this.makeFileRequest(this._fileMultiUploadUrl, filesToUpload);
    };
    FileService.prototype.makeFileRequest = function (url, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            var token = localStorage.getItem('token');
            for (var i = 0; i < files.length; i++) {
                formData.append("files", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            xhr.send(formData);
        });
    };
    FileService.prototype.create = function (repairCode, attachment) {
        return this.http.post(this.getServiceUrl() + '/attachment/create?code=' + repairCode, JSON.stringify(attachment), this.getJsonHeaderWithJWT()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    FileService.prototype.getAttachmentList = function (attachmentCriteria) {
        return this.http.post(this.getServiceUrl() + '/attachment/queryList?page=' + attachmentCriteria.skip, JSON.stringify(attachmentCriteria), this.getJsonHeaderWithJWT()).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]])
    ], FileService);
    return FileService;
}(__WEBPACK_IMPORTED_MODULE_2__baseService__["a" /* BaseService */]));

//# sourceMappingURL=fileService.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_pipe__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repairStatus_pipe__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__role_pipe__ = __webpack_require__(408);
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
                __WEBPACK_IMPORTED_MODULE_2__repairStatus_pipe__["a" /* RepairStatusPipe */],
                __WEBPACK_IMPORTED_MODULE_3__role_pipe__["a" /* RolePipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__area_pipe__["a" /* AreaPipe */],
                __WEBPACK_IMPORTED_MODULE_2__repairStatus_pipe__["a" /* RepairStatusPipe */],
                __WEBPACK_IMPORTED_MODULE_3__role_pipe__["a" /* RolePipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repair_repair_list__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service_AuthService__ = __webpack_require__(165);
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
        this.repairParams = {
            isEvaluate: 'n',
        };
        this.hRepairParams = {
            isEvaluate: 'y',
        };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/sandbox/Projects/RepairApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="RepairRoot" tabTitle="我的报修" [rootParams]="repairParams" tabIcon="ios-medkit-outline"></ion-tab>\n  <ion-tab [root]="RepairRoot" tabTitle="历史报修" [rootParams]="hRepairParams" tabIcon="ios-list-box-outline"></ion-tab>\n  <ion-tab [root]="aboutRoot" tabTitle="个人信息" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/sandbox/Projects/RepairApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__common_service_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* Events */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseModule__ = __webpack_require__(76);
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

var User = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return User;
}(__WEBPACK_IMPORTED_MODULE_0__BaseModule__["a" /* BaseModule */]));

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_userService__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_model_User__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service_ui_message__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutUpdatePage = (function () {
    function AboutUpdatePage(navCtrl, userService, navParams, messageService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.navParams = navParams;
        this.messageService = messageService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__common_model_User__["a" /* User */]();
        this.user = this.navParams.get('user');
    }
    AboutUpdatePage.prototype.updateUser = function () {
        var _this = this;
        if (!this.user.email) {
            this.messageService.error('请输入联系方式');
        }
        this.userService.update(this.user).subscribe(function (res) {
            _this.messageService.success('联系方式更新成功');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__about__["a" /* AboutPage */]);
        });
    };
    AboutUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-update',template:/*ion-inline-start:"/sandbox/Projects/RepairApp/src/pages/about/about.update.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            个人信息更新\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <!--<ion-item-sliding>-->\n            <!--<button ion-item>-->\n                <!--<ion-avatar item-start>-->\n                    <!--<ion-icon name="ios-call-outline" class="company-about"></ion-icon>-->\n                <!--</ion-avatar>-->\n                <!--联系方式-->\n                <!--<div item-content item-end>-->\n                    <!--{{user.email}}-->\n                <!--</div>-->\n            <!--</button>-->\n        <!--</ion-item-sliding>-->\n        <ion-item>\n            <ion-label color="primary" fixed>联系方式</ion-label>\n            <ion-input type="tel" placeholder="请输入联系方式" [(ngModel)]="user.email"></ion-input>\n        </ion-item>\n    </ion-list>\n    <button ion-button full  (click)="updateUser()">更新</button>\n</ion-content>\n'/*ion-inline-end:"/sandbox/Projects/RepairApp/src/pages/about/about.update.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__common_service_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__common_service_ui_message__["a" /* UIMessageService */]])
    ], AboutUpdatePage);
    return AboutUpdatePage;
}());

//# sourceMappingURL=about.update.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(384);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthHttp */
/* unused harmony export getEnv */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_date_picker__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_service_ui_message__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_service_CustomAuthHttp__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__environments_environment_dev__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_repair_repair_list_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_service_userService__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_service_repairService__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__common_service_AuthService__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__common_pipe_pipe_module__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__common_service_repairRecordService__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_about_about_update__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__common_service_fileService__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file_transfer__ = __webpack_require__(720);
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
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* loginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_about_about_update__["a" /* AboutUpdatePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* WindbellApp */], {}, {
                    links: [
                        { loadChildren: '../pages/repair/repair.list.module#RepairPageModule', name: 'RepairListPage', segment: 'repair.list', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__pages_repair_repair_list_module__["RepairPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__common_pipe_pipe_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* WindbellApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* loginPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_about_about_update__["a" /* AboutUpdatePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"],
                    useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_12_angular2_jwt__["AuthHttp"],
                    useFactory: getAuthHttp,
                    deps: [__WEBPACK_IMPORTED_MODULE_11__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_10__common_service_ui_message__["a" /* UIMessageService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */]]
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
                __WEBPACK_IMPORTED_MODULE_22__common_service_repairService__["a" /* RepairService */],
                __WEBPACK_IMPORTED_MODULE_25__common_service_repairRecordService__["a" /* RepairRecordService */],
                __WEBPACK_IMPORTED_MODULE_27__common_service_fileService__["a" /* FileService */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file_transfer__["a" /* FileTransfer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RepairRecord */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairRecordCriteria; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseCriteria__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseModule__ = __webpack_require__(76);
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


var RepairRecord = (function (_super) {
    __extends(RepairRecord, _super);
    function RepairRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RepairRecord;
}(__WEBPACK_IMPORTED_MODULE_1__BaseModule__["a" /* BaseModule */]));

var RepairRecordCriteria = (function (_super) {
    __extends(RepairRecordCriteria, _super);
    function RepairRecordCriteria() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.info = '';
        return _this;
    }
    return RepairRecordCriteria;
}(__WEBPACK_IMPORTED_MODULE_0__BaseCriteria__["a" /* BaseCriteria */]));

//# sourceMappingURL=RepairRecord.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attachment; });
/* unused harmony export AttachmentCriteria */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseCriteria__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseModule__ = __webpack_require__(76);
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
 * Created by huangxuewen on 2018/6/20.
 */


var Attachment = (function (_super) {
    __extends(Attachment, _super);
    function Attachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Attachment;
}(__WEBPACK_IMPORTED_MODULE_1__BaseModule__["a" /* BaseModule */]));

var AttachmentCriteria = (function (_super) {
    __extends(AttachmentCriteria, _super);
    function AttachmentCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AttachmentCriteria;
}(__WEBPACK_IMPORTED_MODULE_0__BaseCriteria__["a" /* BaseCriteria */]));

//# sourceMappingURL=Attachment.js.map

/***/ }),

/***/ 406:
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
        if (value === 10) {
            return '公寓区'; // 物业
        }
        else if (value === 11) {
            return '图文楼';
        }
        else if (value === 12) {
            return '教学楼';
        }
        else if (value === 13) {
            return '工训楼';
        }
        else if (value === 14) {
            return '后勤综合楼';
        }
        else if (value === 15) {
            return '专业教学楼';
        }
        else if (value === 16) {
            return '文体中心'; // 曹云峰
        }
        else if (value === 20) {
            return '室外公共设施'; // 徐雪荣
        }
        else if (value === 30) {
            return '绿化卫生'; // 叶琳、于茂华
        }
        else if (value === 40) {
            return '食堂'; // 叶翠云
        }
        else if (value === 17) {
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

/***/ 407:
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

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolePipe; });
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

var RolePipe = (function () {
    function RolePipe() {
    }
    RolePipe.prototype.transform = function (value, args) {
        if (value === 0) {
            return '学生';
        }
        else if (value === 1) {
            return '教师';
        }
        else if (value === 2) {
            return '维修工';
        }
        else if (value === 3) {
            return '管理员';
        }
        else {
            return '';
        }
    };
    RolePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'role'
        })
    ], RolePipe);
    return RolePipe;
}());

//# sourceMappingURL=role.pipe.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return url; });
/* unused harmony export PAGESIZE */
/* unused harmony export FILE_DOWNLOAD_URL */
/* unused harmony export IMAGE_DOWNLOAD_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOMAIN_SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return USER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UPLOAD_IMAGE_URL; });
/* unused harmony export UPLOAD_MULTI_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IMAGE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FILE_PATH; });
// export const url: string = 'http://localhost:8090/czili';
var url = 'http://211.70.121.60:8090/czili';
var PAGESIZE = 20;
var FILE_DOWNLOAD_URL = url + "/resources/upload";
var IMAGE_DOWNLOAD_URL = url + "/resources/image";
var DOMAIN_SERVER_URL = url;
var USER_URL = "/user";
var UPLOAD_IMAGE_URL = DOMAIN_SERVER_URL + "/file/batch/upload";
var UPLOAD_MULTI_URL = DOMAIN_SERVER_URL + "/upload/multiple";
var IMAGE_SIZE = 5242880; // Size of uploaded image  5M
var FILE_PATH = 'assets/img';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindbellApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_service_ui_message__ = __webpack_require__(57);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/sandbox/Projects/RepairApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/sandbox/Projects/RepairApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_6__common_service_ui_message__["a" /* UIMessageService */]])
    ], WindbellApp);
    return WindbellApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 458:
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

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomAuthHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(460);
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

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIMessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(122);
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
            message: "提示: " + message,
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], UIMessageService);
    return UIMessageService;
}());

//# sourceMappingURL=ui-message.js.map

/***/ }),

/***/ 718:
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

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_model_Repair__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repair_detail__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service_repairService__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__repair_create__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RepairListPage = (function () {
    function RepairListPage(navCtrl, events, repairService, navParams) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.repairService = repairService;
        this.navParams = navParams;
        this.repairCriteria = new __WEBPACK_IMPORTED_MODULE_2__common_model_Repair__["b" /* RepairCriteria */]();
        this.repairCriteria.sno = localStorage.getItem('sno');
        if (navParams.data) {
            this.repairCriteria.isEvaluate = navParams.data.isEvaluate;
            if (this.repairCriteria.isEvaluate === 'y') {
                this.show = false;
            }
            else {
                this.show = true;
            }
        }
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad RiskCategoryListTestPage');
    // }
    RepairListPage.prototype.ngAfterViewInit = function () {
        this.getRepairList();
        this.getCount();
    };
    RepairListPage.prototype.getCount = function () {
        console.log(">>>>enter>>>>> getCount");
        this.repairService.messages$.subscribe(function (count) { return console.log(">>>res>>666669999", count); });
    };
    RepairListPage.prototype.goToRepairDetail = function (repair) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__repair_detail__["a" /* RepairDetailPage */], {
            repair: repair,
        });
    };
    RepairListPage.prototype.JumpToCreateRepair = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__repair_create__["a" /* RepairCreatePage */]);
    };
    RepairListPage.prototype.search = function () {
        this.getRepairList();
    };
    RepairListPage.prototype.getRepairList = function () {
        var _this = this;
        this.repairService.getRepairList(this.repairCriteria).subscribe(function (res) {
            _this.repairList = res.result.content;
            _this.totalRecords = res.result.totalElements;
        });
    };
    RepairListPage.prototype.refreshRepairList = function () {
        var _this = this;
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
    RepairListPage.prototype.setColor = function (repair) {
        var color = '';
        if (repair.repair_status === 0) {
            color = 'red';
        }
        else if (repair.repair_status === 2) {
            color = 'green';
        }
        else if (repair.repair_status === 3 && repair.isEvaluate === 'n') {
            color = 'blue';
        }
        else if (repair.repair_status === 4 && repair.isEvaluate === 'n') {
            color = 'blue';
        }
        else {
            color = 'black';
        }
        return color;
    };
    RepairListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-repair-list',template:/*ion-inline-start:"/sandbox/Projects/RepairApp/src/pages/repair/repair.list.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-buttons>\n      <button ion-button (click)= "JumpToCreateRepair() " >\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{show? \'我的报修\':\'历史报修\'}}</ion-title>\n    <!--gi.refresh();-->\n    <ion-buttons end>\n      <button ion-button (click)= " getRepairList()" >\n        <ion-icon name="refresh-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!--<ion-searchbar (ionInput)="search($event)"-->\n                 <!--&gt;</ion-searchbar>-->\n  <ion-searchbar [(ngModel)]="repairCriteria.content" (ionChange)="search()"  placeholder="搜索报修内容"></ion-searchbar>\n        <ion-list>\n          <button ion-item *ngFor="let repair of repairList" (click)="goToRepairDetail(repair)">\n            <div >报修单号：<span style ="color:#488aff">{{ repair.code }}</span></div>\n            <p>报修时间：{{repair.create_time |date: \'yyyy-MM-dd HH:mm:ss\'}}</p>\n           <p> 报修状态：\n             <span [ngStyle]="{\'color\':setColor(repair)}">{{repair.isEvaluate === \'n\'&& repair.repair_status===4? \'待评价\': repair.isEvaluate === \'y\'? \'已完成\':repair?.repair_status | repairStatus}}</span>\n           </p>\n            <p>报修内容：{{repair.content}}</p>\n          </button>\n        </ion-list>\n  <ion-infinite-scroll (ionInfinite)="showMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/sandbox/Projects/RepairApp/src/pages/repair/repair.list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__common_service_repairService__["a" /* RepairService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], RepairListPage);
    return RepairListPage;
}());

//# sourceMappingURL=repair.list.js.map

/***/ }),

/***/ 76:
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

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepairService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseService__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
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
        _this.repairSource = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        _this.messages$ = _this.repairSource.asObservable();
        return _this;
    }
    RepairService.prototype.pushRepairCount = function (count) {
        this.repairSource.next(count);
    };
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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
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

/***/ })

},[379]);
//# sourceMappingURL=main.js.map