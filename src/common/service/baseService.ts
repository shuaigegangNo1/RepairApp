/**
 * Created by syg on 5/29/18.
 */
import {Observable} from "rxjs/Observable";
import * as constants from "../constants";
import {RequestOptions,Headers} from "@angular/http";
export abstract class BaseService{
    protected _serviceServerBaseUrl: string = constants.DOMAIN_SERVER_URL;

    public abstract getServiceUrl(): string;
    constructor() {
    }

    protected handleError(error) {
        let errorMessage = error.message;
        if (error.error) {
            errorMessage += ":" + error.error;
        }
        switch (error.status) {
            case 401:
                return Observable.throw("invalid token");
            default:
                return Observable.throw(errorMessage);
        }
    }

    protected getLoginUser() {
        return JSON.parse(localStorage.getItem("loginUser"));
    }

    protected getJsonHeaderWithoutJWT() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const options = new RequestOptions({headers: headers});
      return options;
    }
    protected getJsonHeaderWithJWT() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const token = localStorage.getItem('token');
      headers.append('Authorization', 'Bearer ' + token)
      const options = new RequestOptions({headers: headers});
      return options;
    }
}
