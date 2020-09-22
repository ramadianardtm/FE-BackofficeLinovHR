import { Component, OnInit , ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Form } from '@angular/forms';
import { RegisterTenantService } from '../shared/register-tenant-service';
import { database } from 'faker';
import { Session } from 'app/shared/models/session.interface';
import { select, Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { AppConstant } from 'app/configs/app.config';
import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { ApiService } from 'app/core/http/api.service';
import { onConstructTableHeader } from 'app/shared/utils';
import { TableColumn } from 'app/shared/models/table.interface';
import { SearchComponent } from 'app/global-all/search/search.component';
import { TenantService } from '../../../services/tenant.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  tenants:any[];

  tenantManagementColumn: TableColumn[];
  selectedTenantTypes: any[];
  searchForm: FormGroup
  login = false
  product: any[] = [{ code: "12", name: "asd", category: "test", quantity: 'blabla' }, { code: "12", name: "bbbb", category: "test", quantity: 'blabla' },
   { code: "12", name: "aaa", category: "test", quantity: 'blabla' }, { code: "12", name: "test", category: "test", quantity: 'blabla' },]
  inquiry: string = '';
  formReady: FormGroup;
  modules: any[] = [];
  term:string;
  selected: any[] = ["0e907e82-f24d-4180-81fd-7fb5d30f9663", "f0ab790a-dda5-4357-baf5-1eba2f2a540f", "bdc2663d-cf88-4255-ac13-16ff44a00a4d"];
  uri: any[] = [{ url: 'register/languages', label: 'Default Languages' }, { url: 'register/date-formats', label: 'Date Format' }, { url: 'register/currencies', label: "Currency" }]
  @ViewChild(SearchComponent, { static: false }) dataku: SearchComponent;

  constructor(private router: Router, private formBuilder: FormBuilder, private regis: RegisterTenantService, private route:ActivatedRoute,
    private messageService: MessageService,
    private authService: AuthenticationService,
    private apiService: ApiService,
    private tenantService: TenantService,
  ) {
    this.createFormGroup(),
      this.tenantManagementColumn = onConstructTableHeader([
        'code',
        'name',
        'workingMonth',
        'numberFormat',
        'active',
      ]);
  }
  formlist: FormGroup;
  createFormlist() {
    this.formlist = this.formBuilder.group({
      selected: [[]]
    })
  }

  ngOnInit() {
    this.regis.getLovModules().subscribe(res => {
      this.modules = res;
    });
    this.tenantService.sendGetTenantServices().subscribe((data: any)=>{
      console.log('data tenantService: ', data)
      this.tenants = data.data;
    },
      res=>{
        console.log('RESPONSE', res)
      }
    )  
  }

  createFormGroup() {
    this.formReady = this.formBuilder.group({
      tenantName: [''],
      email: [''],
      startDate: [new Date()],
      endDate: [new Date()],
      companies: this.formBuilder.array([this.createFormCompanies()]),
      modules: [this.selected]
    })
  }

  showSuccess(message) {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: message });
  }

  doLogin() {

    this.user.isEss = false;
    this.user.applicationId = AppConstant.applicationId;

    this.apiService.postLogin('login', this.user).subscribe(
      (resp) => {
        this.authService.createSession(resp);
        console.log('resp login', resp);
        // this._connect();
        // this.socket.connect.subscribe((res) => {
        //     this._connect()
        // }
        // );
        // this.socket.disconnect.subscribe((res) => {
        //     this._disconnect();
        // })

        //get general setting
        const currCompanyId = this.authService.getSession().selectedCompanyId;
        this.apiService.get('company/' + currCompanyId).subscribe((resp) => {
          console.log("company", resp);
          this.authService.createGeneralSetting(resp);
        })

        this.router.navigate(['/dashboard']);
      })

  }

  createFormCompanies() {
    return this.formBuilder.group({
      company: this.formBuilder.group({
        name: [''],
        companyTaxNumber: ['000000000000000']
      }),
      lovGnty: this.formBuilder.array([this.formBuilder.group({ id: '' }), this.formBuilder.group({ id: '' }), this.formBuilder.group({ id: '' })])
    })
  }
  displayBasic: boolean = false
  user: any;
  saveTenant() {
    let mddata = []
    const formValue = this.formReady.value
    for (let item of formValue.modules) {
      mddata.push({ id: item })
    }
    formValue.modules = mddata

    this.regis.saveTenat(formValue).subscribe(res => {
      this.showSuccess("Tenant Registered Succes")
      this.user = JSON.parse(res)
      this.displayBasic = true
      this.formReady.reset()
    })

  }

  search() {
    this.router.navigate(['/home/job-vacancy-nonuser'], { queryParams: { inquiry: this.inquiry } });
    console.log(this.inquiry);

  }

   onTypeSearch($event) {
        if ($event.value) {
            this.searchForm = $event
            const searchBody = this.searchForm.getRawValue();
            console.log('searchBody', searchBody);
        }
    }

  onRowSelect() {
    this.formlist.get('selected').patchValue(this.tenantManagementColumn)
  }
  onHeadSelect() {
    this.formlist.get('selected').patchValue(this.tenantManagementColumn)

  }
  onRowUnselect() {
    this.formlist.get('selected').patchValue(this.tenantManagementColumn)
  }

  addCompany() {
    let comp = this.formReady.controls.companies as FormArray
    comp.push(this.createFormCompanies())
  }

  

  onSelectRef1(event, i, j) {

    let recCompanies = this.formReady.controls.companies as FormArray
    let companies = recCompanies.controls[i] as FormGroup
    let general = companies.controls.lovGnty as FormArray
    let general0 = general.controls[j] as FormGroup
    general0.get("id").patchValue(event.key)
  }

  arrow(event){
    this.router.navigate([`tenant/detail/${event.data.id}`],{relativeTo:this.route})
  }

}
