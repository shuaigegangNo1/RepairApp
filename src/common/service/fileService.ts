import { Injectable } from '@angular/core';
import {DOMAIN_SERVER_URL, UPLOAD_IMAGE_URL} from "../constants";
import {Attachment, AttachmentCriteria} from "../model/Attachment";
import {BaseService} from "./baseService";
import {Http} from "@angular/http";

@Injectable()
export class FileService extends BaseService{

  protected _fileMultiUploadUrl: string = UPLOAD_IMAGE_URL;
  constructor( private http: Http) {
    super()
  }

  getServiceUrl() {
    return DOMAIN_SERVER_URL;
  }
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

  create(repairCode: string, attachment: Attachment) {
    return this.http.post(this.getServiceUrl() + '/attachment/create?code=' + repairCode , JSON.stringify(attachment),
        this.getJsonHeaderWithJWT()).map(res => res.json()).catch(this.handleError);
  }
  getAttachmentList(attachmentCriteria: AttachmentCriteria) {
    return this.http.post(this.getServiceUrl() + '/attachment/queryList?page=' + attachmentCriteria.skip, JSON.stringify
    (attachmentCriteria), this.getJsonHeaderWithJWT()).map(res => res.json()).catch(this.handleError);
  }
}
