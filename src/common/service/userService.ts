/**
 * Created by enixjin on 1/3/17.
 */
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {DOMAIN_SERVER_URL, USER_URL} from "../constants";
import {BaseService} from "./baseService";
import {AuthHttp} from "angular2-jwt";
import {RequestOptions, Headers, Http} from "@angular/http";
@Injectable()
export class UserService extends BaseService{
    constructor(private a_http : AuthHttp,private http: Http) {
        super();
    }

    getServiceUrl(): string {
        return DOMAIN_SERVER_URL + USER_URL;
    }


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

  getUserListByRole(role: number) {
    return this.http.get(this.getServiceUrl()+ "/userList?role="+ role, this.getJsonHeaderWithJWT()).map(
      res => res.json()
    ).catch(this.handleError)
  }
}
