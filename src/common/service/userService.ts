/**
 * Created by syg on 5/31/18.
 */
import {Injectable} from "@angular/core";
import {DOMAIN_SERVER_URL, USER_URL} from "../constants";
import {BaseService} from "./baseService";
import {Http} from "@angular/http";
@Injectable()
export class UserService extends BaseService{
    constructor(private http: Http) {
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
    getUserbySno(sno: string) {
        return this.http.get(this.getServiceUrl() + '/queryBySno?sno=' + sno,  this.getJsonHeaderWithJWT())
            .map(res => res.json()).catch(this.handleError)
    }
  getUserListByRole(role: number) {
    return this.http.get(this.getServiceUrl()+ "/userList?role="+ role, this.getJsonHeaderWithJWT()).map(
      res => res.json()
    ).catch(this.handleError)
  }
}
