import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../http/api.service';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private TENANT_LIST = "tenants";
  private TENANT_POST = "register/";
  private TENANT_DETAIL = `tenan-detail/`;
  private TENANT_DELETE = `tenant/`;
  private CURRENCIES_LIST = `lov/currencies`;
  private DATES_FORMAT_LIST = `lov/date-formats`;
  private LANG_LIST = `lov/languages`;
  private PLANS_LIST = `subs/plans`;
  private REPORT_PDF = `report/`;
  constructor(private api:ApiService) { }

  public sendGetTenantServices(page, limit){
    return this.api.get(`${this.TENANT_LIST}?page=${page}&limit=${limit}`);
  }

  public sendGetTenantDetailServices(uuid){
    return this.api.get(`${this.TENANT_DETAIL}${uuid}`);
  }

  public tenantServicesDelete(uuid){
    return this.api.delete(`${this.TENANT_DELETE}${uuid}`);
  }

  public getCurrencies(){
    return this.api.get(this.CURRENCIES_LIST);
  }

  public getDateFormats(){
    return this.api.get(this.DATES_FORMAT_LIST);
  }

  public getLang(){
    return this.api.get(this.LANG_LIST);
  }

  public getPlans(){
    return this.api.get(this.PLANS_LIST);
  }

  public postTenants(data){
    return this.api.post(`${this.TENANT_POST}`, data)
  }

  public getReports(uuid){
    return this.api.get(`${this.REPORT_PDF}${uuid}`);
  }

  postLogin(body){
    
  }


}
