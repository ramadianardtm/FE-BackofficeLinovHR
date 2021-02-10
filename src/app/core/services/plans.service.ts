import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from '../http/api.service';
import { Package } from '../layouts/login/shared/interface/package';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private PLAN_LIST = "subs/planss";
  private PLAN_DELETE = "subs/plans/delete";
  private MODULES_LIST = "modules";
  private POST_PLAN = "subs/plans";
  private APP_LIST = "app";
  constructor(private api:ApiService) { }

  public getPlansServices(page, limit){
    return this.api.get(`${this.PLAN_LIST}?page=${page}&limit=${limit}&name=&order=&asc=`);
  }

  public getModules(){
    return this.api.get(`${this.MODULES_LIST}`);
  }

  public getApps(){
    return this.api.get(`${this.APP_LIST}`);
  }

  public getPlanDetailServices(uuid): Observable<Package>{
    return this.api.get(`${this.PLAN_LIST}/${uuid}`);
  }

  public deletePlanServices(uuid){
    return this.api.delete(`${this.PLAN_DELETE}/${uuid}`);
  }

  public postPlans(data){
    return this.api.post(`${this.POST_PLAN}`, data)
  }

  public updatePlans(data){
    return this.api.put(`${this.POST_PLAN}`, data)
  }

}
