import { Http, Request, RequestOptions, RequestOptionsArgs, Response } from "@angular/http";
import { Events } from 'ionic-angular';
import { AuthHttp, AuthConfig, AuthHttpError } from 'angular2-jwt'
import { Observable } from "rxjs/Observable";
import { RestResult } from '../model/rest-result'
import { UIMessageService } from '../service/ui-message'
import 'rxjs/Rx';

export class CustomAuthHttp extends AuthHttp{

  constructor(options: AuthConfig, 
    http: Http, 
    private message: UIMessageService,
    public events: Events,
    defOpts?: RequestOptions,
  ){
    super(options, http, defOpts)
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>{
    return super.request(url, options)
    .catch((e, c)=>this.onCatch(e, c))
      .do((res: Response) => {
        //console.log("custom http success " + url)
        this.onSuccess(res);
        let restResult = res.json() as RestResult<any>
        if (restResult.code != 'I001'){
          if (restResult.code.startsWith("LE")){
            this.info(restResult.message)
          }else{
            this.onError(restResult.message)
          }
          //then bypass subsequent success scribe, and ignore it here
          throw Observable.throw(restResult)
        }
      }, (error: any) => {
        this.onError(error);
      }).catch((err, caught)=>{
        return Observable.throw("ignored error")
      }).finally(() => {
        this.onFinally();
      });
  }

  private getFullUrl(url: string): string {
    //return environment.apiEndpoint + url;
    return null
  }

  private beforeRequest(): void {
    //this.notifyService.showPreloader();
  }

  private afterRequest(): void {
    //this.notifyService.hidePreloader();
  }

  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    if (error instanceof Response && error.status == 0){
      this.message.info("网络不给力哦")
    }
    return Observable.throw(error);
  }

  private onSuccess(res: Response): void {
  }

  private info(s: string): void{
    this.message.info(s)
  }

  private onError(error: any): void {
    if (error instanceof Response){
      if (error.status == 403){
        this.events.publish("user:unauthenticated")
      }
    }else if (""+error == 'Error: No JWT present or has expired'){
      this.events.publish("user:unauthenticated")
    }else{
      this.message.error(error)
    }
  }

  private onFinally(): void {
    this.afterRequest();
  }

}
