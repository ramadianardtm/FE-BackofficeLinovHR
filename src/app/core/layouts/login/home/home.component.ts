import { Component, OnInit , ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Form } from '@angular/forms';
import { RegisterTenantService } from '../shared/register-tenant-service';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { TableColumn } from 'app/shared/models/table.interface';
import { SearchComponent } from 'app/global-all/search/search.component';
import { TenantService } from '../../../services/tenant.service';
import { Paginator } from 'app/configs/paginator.config';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  tenants:any[];
  currentPage = 0;
  rowsPerPageOptions = Paginator.rowsPerPageOptions;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  rowsPerPage:any[];
//  checked: boolean = true;

  constructor(private router: Router, private formBuilder: FormBuilder, private regis: RegisterTenantService, private route:ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private tenantService: TenantService,
  ) {}


  ngOnInit() {
  }

  getPage(event:LazyLoadEvent){
    let page = (event.first/ event.rows +1)
    let rows = event.rows
    this.tenantService.sendGetTenantServices(page,rows).toPromise().then((data: any)=>{ 
      this.tenants = data.data;
      this.rowsPerPage = data.count;

      console.log(this.tenants)
    }) 
  }

  switchActive(id, event) {
    this.confirmationService.confirm({
      message: 'Anda yakin ingin menghapus data?',
      accept: () => {
        if (event.checked) {
          this.tenantService.tenantServicesActive(id).subscribe((data: any)=>{ 
            this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Tenant Activate' });
          })
        } else {
          this.tenantService.tenantServicesDeactive(id).subscribe((data: any)=>{ 
            this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Tenant Not Activated' });
            this.tenantService.sendGetTenantServices(1,this.rowsPerPage).toPromise().then((data: any)=>{ 
              this.tenants = data.data;
              this.rowsPerPage = data.count;
            })
          })
        }
      }
    });
  }

  updateTenant(params){
    this.router.navigate([`tenant/update/${params}`],{relativeTo:this.route})
  }

  detailTenant(params){
    this.router.navigate([`tenant/detail/${params}`],{relativeTo:this.route})
  }

  deleteTenant(params){
    this.confirmationService.confirm({
      message: 'Anda yakin ingin menghapus data?',
      accept: () => {
        this.tenantService.tenantServicesDeactive(params).subscribe((data: any)=>{ 
          this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil menghapus data' });
          this.tenantService.sendGetTenantServices(1,this.rowsPerPage).toPromise().then((data: any)=>{ 
            this.tenants = data.data;
            this.rowsPerPage = data.count;
          }) 
        }) 
      }
    });
  }

  reports(){
    this.tenantService.getReportsAll().subscribe(
      (res:any)=>{
        let pdfWindow = window.open("")
        pdfWindow.document.write(
            "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
            encodeURI(res.file) + "'></iframe>"
        )
      }
    ) 
  }

}
