import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt'
import {UPLOAD_IMAGE_URL} from "../constants";

@Injectable()
export class FileService {

  protected _fileMultiUploadUrl: string = UPLOAD_IMAGE_URL;
  constructor(public http: AuthHttp) {}


  handlerFileUpload(filesToUpload: Array<File>): Promise<any> {
    return this.makeFileRequest(this._fileMultiUploadUrl, filesToUpload);
  }

  makeFileRequest(url: string, files: Array<File>): Promise<any> {
    return new Promise((resolve, reject) => {
      const formData: any = new FormData();
      const xhr = new XMLHttpRequest();
      const token = localStorage.getItem('token');
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i], files[i].name);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };
      xhr.open("POST", url, true);
      xhr.setRequestHeader('Authorization', 'Bearer ' + token)
      xhr.send(formData);
    });
  }

}
