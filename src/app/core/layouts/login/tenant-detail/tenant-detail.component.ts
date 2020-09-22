import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenantService } from '../../../services/tenant.service';

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.scss']
})
export class TenantDetailComponent implements OnInit {

  href: string = "";
  lastURI: string ="";
  tenantDetail: any = {};
  companyTenant: any ={};
  menuActionList: any = {};
  tempNameCode: string = "";

  constructor(
    private router : Router,
    private tenantService: TenantService,
    ) { }

    

  ngOnInit() {
    this.href = this.router.url;
    this.lastURI = this.href.split('/').pop();
    this.tenantService.sendGetTenantDetailServices(this.lastURI).subscribe(
      (res:any)=>{
        this.companyTenant = res.company
        this.menuActionList = res.subPlans.menuActionsList
        this.tempNameCode = `Name: ${res.subPlans.name} / ${res.subPlans.code}`
        this.tenantDetail = res
        console.log('RESPONSE TENANT', this.tenantDetail)
        console.log('RESPONSE COMPANY', this.companyTenant)
      }
    )  
  }


}
