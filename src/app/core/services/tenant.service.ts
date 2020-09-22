import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TenantService {
  private REST_API_SERVER = "https://f1fd5ca16219.ngrok.io/api/v1/tenants?page=1&limit=0";
  constructor(private httpClient: HttpClient) { }

  public sendGetTenantServices(){
    console.log('data tenantService: ')
    return this.httpClient.get(this.REST_API_SERVER);
  }

}
