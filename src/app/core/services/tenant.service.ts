import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TenantService {
  private TENANT_LIST = "https://eeec170f8c58.ngrok.io/api/v1/tenants?page=1&limit=0";
  private TENANT_DETAIL = "https://eeec170f8c58.ngrok.io/api/v1/tenan-detail/";
  constructor(private httpClient: HttpClient) { }

  public sendGetTenantServices(){
    console.log('data tenantService: ')
    return this.httpClient.get(this.TENANT_LIST);
  }

  public sendGetTenantDetailServices(uuid){
    console.log('data tenantService: ')
    return this.httpClient.get(`${this.TENANT_DETAIL}${uuid}`);
  }

}
