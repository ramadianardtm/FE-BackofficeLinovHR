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
        this.menuActionList = res.subPlans.module
        this.tempNameCode = `Name: ${res.subPlans.name} / ${res.subPlans.code}`
        this.tenantDetail = res
      }
    )  
  }

  reports(){
    this.href = this.router.url;
    this.lastURI = this.href.split('/').pop();
    console.log(this.lastURI)
    this.tenantService.getReports(this.lastURI).subscribe(
      (res:any)=>{
        console.log('RESPONSE REPORTS', res.file)
        let pdfWindow = window.open("")
        pdfWindow.document.write(
            "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
            encodeURI(res.file) + "'></iframe>"
        )
      }
    )  

  }


}
