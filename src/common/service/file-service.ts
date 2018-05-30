import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt'
import { RestResult } from '../../common/model/rest-result'
import { Observable } from "rxjs/Observable";
import { Environment } from '../../environments/environment'
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import 'rxjs/add/operator/map';
import {url} from "../constants";

@Injectable()
export class FileService {

  fileTransfer: FileTransferObject = this.transfer.create();
  constructor(public http: AuthHttp,
    public env: Environment,
    private transfer: FileTransfer,
  ) {}

  uploadFile(formData: FormData) : Observable<string>{
    return this.http.post(url + "api/upload", formData)
    .map((res)=>{
      let restResult = res.json() as RestResult<string>
      return restResult.value
    })
  }

  nativeTransferFile(path : string): Promise<string>{
    return this.fileTransfer.upload(path, url + "api/upload").then((fileUploadResult)=>{
      //TODO confirm it is working
      let restResult = JSON.parse(fileUploadResult.response) as RestResult<string>
      return restResult.value
    })
  }


}
