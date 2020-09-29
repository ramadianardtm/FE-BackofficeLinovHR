import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  private PLAN_LIST = "subs/planss";
  constructor(private api:ApiService) { }

  public getPlansServices(page, limit){
    return this.api.get(`${this.PLAN_LIST}?page=${page}&limit=${limit}`);
  }

  public getPlanDetailServices(uuid){
    return this.api.get(`${this.PLAN_LIST}/${uuid}`);
  }

}
