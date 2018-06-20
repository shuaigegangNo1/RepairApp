/**
 * Created by huangxuewen on 2018/4/17.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BaseService} from './baseService';
import {Repair, RepairCriteria} from "../model/Repair";
import {DOMAIN_SERVER_URL} from "../constants";
import {Subject} from "rxjs/Subject";
@Injectable()
export class RepairService extends BaseService {
    private repairSource = new Subject<any>();
    messages$ = this.repairSource.asObservable();
    constructor(private http: Http) {
        super()
    }
    pushRepairCount(count: any) {
        this.repairSource.next(count);
    }
    getServiceUrl() {
        return DOMAIN_SERVER_URL;
    }

    getRepairList(repairCriteria: RepairCriteria) {
        return this.http.post(this.getServiceUrl() + '/repair/querylist?page=' + repairCriteria.skip, JSON.stringify
            (repairCriteria), this.getJsonHeaderWithJWT()).map(res => res.json()).catch(this.handleError);
    }
    create(userId: string, repair: Repair) {
        return this.http.post(this.getServiceUrl() + '/repair/create?userId=' + userId , JSON.stringify(repair),
            this.getJsonHeaderWithJWT()).map(res => res.json()).catch(this.handleError)
    }
    update(repair: Repair) {
        return this.http.post(this.getServiceUrl() + '/repair/update' , JSON.stringify(repair),
            this.getJsonHeaderWithJWT()).map(res => res.json()).catch(this.handleError)
    }
    getRepairDetail(repairId: number) {
        return this.http.get(this.getServiceUrl() + '/repair/detail?repairId=' + repairId ,
            this.getJsonHeaderWithJWT()).map(res => res.json()).catch(this.handleError)
    }
    updateRepairman(repairId: number , repairmanId: number) {
        return this.http.get(this.getServiceUrl() + '/repair/update?repairId=' + repairId + '&repairmanId=' +  repairmanId,
            this.getJsonHeaderWithJWT()).map(res => res.json()).catch(this.handleError)
    }
    getAssertRepairDetail(repairId: number) {
        return this.http.get(this.getServiceUrl() + '/repair/detail4Assert?repairId=' + repairId ,
            this.getJsonHeaderWithJWT()).map(res => res.json()).catch(this.handleError)
    }
    getRepairCount(repairStatus: number) {
        return this.http.get(this.getServiceUrl() + '/repair/countByRepairStatus?repairStatus=' + repairStatus ,
            this.getJsonHeaderWithJWT()).map(res => res.json()).catch(this.handleError)
    }
}
