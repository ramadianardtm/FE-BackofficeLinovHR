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
  private TENANT_DELETE = `tenant-deactive/`;
  private CURRENCIES_LIST = `lov/currencies`;
  private DATES_FORMAT_LIST = `lov/date-formats`;
  private LANG_LIST = `lov/languages`;
  private PLANS_LIST = `subs/plans`;
  private REPORT_PDF = `report/`;
  private REPORT_ALL = `report-alltenant`;
  private COMPANY_DEACTIVE = `company/deactive/`;
  private COMPANY_DELETE = `company/`;
  private COMPANY_UPDATE = `company/`;
  private COMPANY_ADD = `company/`;
  private TENANT_UPDATE_PLANS = `subs/plans`;
  constructor(private api:ApiService) { }

  public sendGetTenantServices(page, limit){
    return this.api.get(`${this.TENANT_LIST}?page=${page}&limit=${limit}&name=&order=&asc=`);
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

  public getReportsAll(){
    return this.api.get(`${this.REPORT_ALL}`);
  }

  public deactiveCompany(uuid){
    return this.api.delete(`${this.COMPANY_DEACTIVE}${uuid}`);
  }

  public deleteCompany(uuid){
    return this.api.delete(`${this.COMPANY_DELETE}${uuid}`);
  }

  public updateCompany(data){
    return this.api.put(`${this.COMPANY_UPDATE}`, data)
  }

  public createCompany(data){
    return this.api.post(`${this.COMPANY_ADD}`, data)
  }

  public updateTenantPlans(data){
    return this.api.put(`${this.TENANT_UPDATE_PLANS}`, data)
  }

  postLogin(body){
    
  }


}
