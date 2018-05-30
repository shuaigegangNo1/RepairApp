/**
 * Created by huangxuewen on 2018/1/25.
 */
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthHttp} from "angular2-jwt";
import {Events} from "ionic-angular";
import {Storage } from '@ionic/storage';
import {RequestOptions, Headers, Http} from "@angular/http";
import { url } from '../constants'
export class User {
  name: string;
  password: string;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;
  constructor(public http: Http,
              public authHttp: AuthHttp,
              public events : Events,
              // private message : NoticeService,
              private storage : Storage){
  }
  public login(credentials): Observable<any> {
    if (credentials.name === null || credentials.password === null) {
      return Observable.throw("请输入用户名和密码");
    } else {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({headers: headers});
      return this.http.post(url+ "/login", JSON.stringify(credentials), options)
        .map((res)=>{
          console.log('get token from server ::: ' + JSON.stringify(res.json().token));
          localStorage.setItem("token", res.json().token);
          localStorage.setItem("sno", credentials.name);
          this.storage.set('token', res.json().token).then((o)=>{
            this.currentUser = new User(credentials.userid, credentials.passwd);
            this.events.publish('user:login')
            console.log('user set local storage ::: ' + JSON.stringify(this.currentUser));

          }).catch((e)=>{
            console.log("token set exception", e)
          })

          return Observable.create(observer => {
            // At this point make a request to your backend to make a real check!
            let access = true;
            observer.next(access);
            observer.complete();
          });

        })
    }
  }


  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {

    return Observable.create(observer => {
      this.currentUser = null;
      this.storage.remove('token').then(()=>{
        observer.next(true);
        observer.complete();
      });
    })

  }
}
